import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input } from "../../components/Form";
import "./BathroomCalculator.css";
import { Button } from 'react-bootstrap';




class BathroomCalculator extends Component {
  state = {
    size: " ",
    area: " ",
    quality: " "
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.size && this.state.area && this.state.quality) {
      this.calculateCost();
    }
  };

  calculateCost = (size, area, quality) => {
    const laborCostPerSqFt = 200;

    

  };


  render() {
  
    return (
      <Container>
      {/* Input Form for bathroom remodel calculator */}
        <Row>
          <Col size="col-md-8 col-md-offset-2">
            <div className="panel-group">
              <div className="panel panel-primary">
                <a className="panel-primary" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne">
                <div className="panel-heading">
                  <h4 className="panel-title">Bathroom Remodel Estimator</h4>
                </div>
                </a>
              <div id="collapseOne" className="panel-collapse collapse">
                <form>
                 <div className="panel-body">
                    
                    {/* input on the room size */}
                    <Row>
                      <Col size="col-md-5">
                        <label>Bathroom Size</label>
                      </Col>
                      <Col size="col-md-4">
                        <Input 
                          value={this.state.size}
                          onChange={this.handleInputChange}
                          name="size"
                          />   
                      </Col>
                      <label>sq. ft.</label>
                    </Row>

                    {/* input on area to tile */} 
                    <Row>
                      <Col size="col-md-5">
                        <label>Install New Tiles</label>
                      </Col>
                      <Col size="col-md-4">
                        <select defaultValue={this.state.selectValue} onChange={this.handleInputChange}>
                          <option value="-1" disabled>--</option>
                          <option value="floors">Floors Only</option>
                          <option value="floors-wall">Floors & Wall</option>
                        </select>
                      </Col>  
                    </Row> 
                    <br />
                    
                  {/* input on quality of materials */}
                    <Row>
                      <Col size="col-md-5">
                        <label>Quality</label>
                      </Col>
                      <Col size="col-md-4">
                        <select defaultValue={this.state.selectValue} onChange={this.handleInputChange}>
                          <option value="-1" disabled>--</option>
                          <option value="low-end">Low End</option>
                          <option value="mid-range">Mid Range</option>
                          <option value="luxury">Luxury</option>
                        </select>   
                      </Col>  
                    </Row>
                  </div>

                {/* calculating button */}
                  <div className="panel-body">
                    <Button id="calc-btn" bsStyle="warning"
                      onClick={this.handleFormSubmit}
                      >Calculate Estimated Cost
                    </Button>
                  </div> 
                </form>
              </div>
            </div>
          </div>
        </Col>
      </Row>

         
    </Container>

)
}
}

export default BathroomCalculator;