import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input } from "../../components/Form";
import "./FloorReplacementCalculator.css";
import { Button } from 'react-bootstrap';




class FloorReplacementCalculator extends Component {
  state = {
    size: " ",
    material: " ",
    quality: " ",
    removeOldFloor: " ",
    installSubfloor: " ",
    installTrim: " ",
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
    if (this.state.size && 
        this.state.material && 
        this.state.quality && 
        this.state.removeOldFloor && 
        this.state.installSubfloor && 
        this.state.installTrim) {
            this.calculateCost();
            this.setState({
              [name]:value
            });
        }
  };

  calculateCost = () => {
    const laborCostPerHr = 75;
    const areaFloorsHrPerSqFt = 2;
    const areaFloorsWallHrPerSqFt = 4;
    const lowEndPerSqFt = 35;
    const midRangePerSqFt = 70;
    const luxuryPerSqFt = 120;
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
                <a className="panel-primary" data-toggle="collapse" data-parent="#accordion3" href="#collapseThree">
                <div className="panel-heading">
                  <h4 className="panel-title">Floor Replacement Budget Estimator</h4>
                </div>
                </a>
              <div id="collapseThree" className="panel-collapse collapse">
                <form>
                 <div className="panel-body">
                    
                    {/* input on the room size */}
                    <Row>
                      <Col size="col-md-5">
                        <label>Room Size</label>
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

                    {/* input on flooring material */} 
                    <Row>
                      <Col size="col-md-5">
                        <label>Flooring Material</label>
                      </Col>
                      <Col size="col-md-5">
                        <select defaultValue={this.state.selectValue} onChange={this.handleInputChange} name="material">
                          <option value="-1" abled>Select Option</option>
                          <option value="carpets">Carpets</option>
                          <option value="hardwood">Hardwood</option>
                          <option value="laminate">Laminate</option>
                          <option value="porcelain">Porcelain / Tile </option>
                          <option value="vinyl">Vinyl</option>
                        </select>
                      </Col>  
                    </Row> 
                    <br />
                    
                  {/* input on quality of materials */}
                    <Row>
                      <Col size="col-md-5">
                        <label>Material Quality</label>
                      </Col>
                      <Col size="col-md-5">
                        <select defaultValue={this.state.selectValue} onChange={this.handleInputChange} name="quality">
                          <option value="-1" abled>Select Option</option>
                          <option value="low-end">Low-End</option>
                          <option value="mid-range">Mid Range</option>
                          <option value="hi-end">High-End</option>
                        </select>   
                      </Col>  
                    </Row>
                    <br />

                  {/* input on removing old flooring */}
                    <Row>
                      <Col size="col-md-5">
                        <label>Remove Old Flooring</label>
                      </Col>
                      <Col size="col-md-5">
                        <select defaultValue={this.state.selectValue} onChange={this.handleInputChange} name="removeOldFloor">
                          <option value="-1" abled>Select Option</option>
                          <option value="no">No</option>
                          <option value="yes-carpet">Yes - Carpet</option>
                          <option value="yes-hardwood">Yes - Harwood</option>
                          <option value="yes-laminate">Yes - Laminate</option>
                          <option value="yes-tile">Yes - Tile</option>
                        </select>   
                      </Col>  
                    </Row>
                     <br />

                  {/* input on subfloor installation */}
                    <Row>
                      <Col size="col-md-5">
                        <label>Install Subfloor?</label>
                      </Col>
                      <Col size="col-md-5">
                        <select defaultValue={this.state.selectValue} onChange={this.handleInputChange} name="installSubfloor">
                          <option value="-1" abled>Select Option</option>
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>   
                      </Col>  
                    </Row>
                     <br />

                  {/* input on subfloor installation */}
                    <Row>
                      <Col size="col-md-5">
                        <label>Install Trim?</label>
                      </Col>
                      <Col size="col-md-5">
                        <select defaultValue={this.state.selectValue} onChange={this.handleInputChange} name="installTrim">
                          <option value="-1" abled>Select Option</option>
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>   
                      </Col>  
                    </Row>
                     <br />

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

export default FloorReplacementCalculator;