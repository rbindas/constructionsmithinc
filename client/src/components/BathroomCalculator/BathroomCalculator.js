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
    quality: " ",
    totalCost: " "
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const {name, value} = event.target;
    if (this.state.size && this.state.area && this.state.quality) {
      console.log(this.state.size + this.state.area + this.state.quality);
      this.calculateCost();
      this.setState({
        [name]:value
      });
    }
  };

  calculateCost = (size, area, quality) => {
    const laborCostPerHr = 80;
    const areaFloorsHrPerSqFt = 0.5;
    const areaFloorsWallHrPerSqFt = 1;
    const lowEndPerSqFt = 25;
    const midRangePerSqFt = 50;
    const luxuryPerSqFt = 100;
    let areaFloorsCost;
    let areaFloorsWallCost;
    let lowEndCost;
    let midRangeCost;
    let luxuryCost;
    let totalCost;
    let selectedArea;
    let selectedQuality;

    let areaFloorsTotalLaborHr = this.state.size * areaFloorsHrPerSqFt;
    let areaFloorsWallTotalLaborHr = this.state.size * areaFloorsWallHrPerSqFt;
    

    {/* cost for install tiles on floors only and selected trim quality */}
    if (this.state.area === "floors") {
      areaFloorsCost = laborCostPerHr * areaFloorsTotalLaborHr;
      if (this.state.quality === "low-end") {
          lowEndCost = lowEndPerSqFt * this.state.size;
          this.state.totalCost = areaFloorsCost + lowEndCost;
      } else 
      if (this.state.quality === "mid-range") {
          midRangeCost = midRangePerSqFt * this.state.size;
          this.state.totalCost = areaFloorsCost + midRangeCost;
      } else
      if (this.state.quality === "luxury") {
          luxuryCost = luxuryPerSqFt * this.state.size;
          this.state.totalCost = areaFloorsCost + luxuryCost; 
      }    

    } else
    {/* cost for install tiles on floors & walls and selected trim quality */}
    if (this.state.area === "floors-wall") {
      areaFloorsWallCost = laborCostPerHr * areaFloorsWallTotalLaborHr;
      if (this.state.quality === "low-end") {
          lowEndCost = lowEndPerSqFt * this.state.size;
          this.state.totalCost = areaFloorsWallCost + lowEndCost;
      } else 
      if (this.state.quality === "mid-range") {
          midRangeCost = midRangePerSqFt * this.state.size;
          this.state.totalCost = areaFloorsWallCost + midRangeCost;
      } else
      if (this.state.quality === "luxury") {
          luxuryCost = luxuryPerSqFt * this.state.size;
          this.state.totalCost = areaFloorsWallCost + luxuryCost; 
      }    

     }
      
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
                      <Col size="col-md-5">
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
                      <Col size="col-md-5">
                        <select defaultValue={this.state.selectValue} onChange={this.handleInputChange} name="area">
                          <option value="-1" abled>Select Option</option>
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
                      <Col size="col-md-5">
                        <select defaultValue={this.state.selectValue} onChange={this.handleInputChange} name="quality">
                          <option value="-1" abled>Select Option</option>
                          <option value="low-end">Low End</option>
                          <option value="mid-range">Mid Range</option>
                          <option value="luxury">Luxury</option>
                        </select>   
                      </Col>  
                    </Row>
                  </div>

                {/* calculating button */}
                  <div className="panel-body">
                    <Button id="calc-btn" bsStyle="primary"
                      onClick={this.handleFormSubmit}
                      >Calculate Estimated Cost
                    </Button>
                  </div> 

                 {/* display results from calculator */}
                  <div className="panel panel-default" id="cost-display">
                    <div className="panel-body">
                      <Row>
                        <Col size="col-md-8">
                          <label>Estimated Cost: </label>
                        </Col>
                      
                        <Col size="col-md-4">
                          <label>US $</label><label>{this.state.totalCost}</label> 
                        </Col>
                      </Row>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <br />

   


         
    </Container>

)
}
}

export default BathroomCalculator;