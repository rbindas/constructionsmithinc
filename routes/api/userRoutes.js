const express = require('express');
const passport = require('passport');
const router = express.Router();
const db = require('./../../models');

function getCurrentUser(req, res) {
    const { id, username } = req.user;
    res.json({
        id, username
    });
}

router.route('/auth')
    
    .get((req, res) => {
        if (!req.user) {
            return res.status(401).json({
                message: 'You are not currently logged in.'
            })
        }

        getCurrentUser(req, res);
    })
    
    .post(passport.authenticate('local'), (req, res) => {
        if (!req.isAuthenticated()) {
            return res.status(401).json({
                message: 'Invalid username or password.'
            })
        }

        getCurrentUser(req, res);
    })
    
    .delete((req, res) => {
        req.logout();
        req.session.destroy();
        res.json({
            message: 'You have been logged out.'
        });
    });

router.route('/users')
    
    .post((req, res, next) => {
        db.User.create(req.body)
            .then(user => {
                const { id, username } = user;
                res.json({
                    id, username
                });
            })
            .catch(err => {
                
                if (err.code === 11000) {
                    res.status(400).json({
                        message: 'Username already in use.'
                    })
                }

                
                next(err);
            });
    });

module.exports = router;