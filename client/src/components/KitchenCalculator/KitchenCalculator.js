import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input } from "../../components/Form";
import "./KitchenCalculator.css";
import { Button } from 'react-bootstrap';




class KitchenCalculator extends Component {
  state = {
    cabinetsLength: " ",
    countertopSize: " ",
    cabinetsType: " ",
    countertopMaterial: " ",
    kitchenFixtures: " ",
    kitchenSize: " ",
    ceilingHeight: " ",
    paintWalls: " ",
    floorType: " ",
    appliances: " ",
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
    if (this.state.cabinetsLength && this.state.countertopSize && this.state.cabinetsType && this.state.countertopMaterial && this.state.kitchenFixtures && this.state.kitchenSize && this.state.ceilingHeight && this.state.paintWalls && this.state.floorType && this.state.appliances) {
      console.log(this.state.cabinetsLength + this.state.countertopSize + this.state.cabinetsType);
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
      {/* Input Form for kitchen remodel calculator */}
        <Row>
          <Col size="col-md-8 col-md-offset-2">
            <div className="panel-group">
              <div className="panel panel-primary">
                <a className="panel-primary" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
                <div className="panel-heading">
                  <h4 className="panel-title">Kitchen Remodel Estimator</h4>
                </div>
                </a>
              <div id="collapseTwo" className="panel-collapse collapse">
                <form>
                 <div className="panel-body">

                    {/* input on the kitchen size */}
                    <Row>
                      <Col size="col-md-5">
                        <label>Kitchen Size</label>
                      </Col>
                      <Col size="col-md-5">
                        <Input 
                          value={this.state.kitchenSize}
                          onChange={this.handleInputChange}
                          name="kitchenSize"
                          />   
                      </Col>
                      <label>sq. ft.</label>
                    </Row>
                    
                    {/* input on the ceiling height */}
                    <Row>
                      <Col size="col-md-5">
                        <label>Ceiling Height</label>
                      </Col>
                      <Col size="col-md-5">
                        <Input 
                          value={this.state.ceilingHeight}
                          onChange={this.handleInputChange}
                          name="ceilingHeight"
                          />   
                      </Col>
                      <label>ft.</label>
                    </Row>
                    
                    {/* input on the cabinets length */}
                    <Row>
                      <Col size="col-md-5">
                        <label>Cabinets Length Size</label>
                      </Col>
                      <Col size="col-md-5">
                        <Input 
                          value={this.state.cabinetsLength}
                          onChange={this.handleInputChange}
                          name="cabinetsLength"
                          />   
                      </Col>
                      <label>ln. ft.</label>
                    </Row>

                    {/* input on the countertop size */}
                    <Row>
                      <Col size="col-md-5">
                        <label>Countertop Size</label>
                      </Col>
                      <Col size="col-md-5">
                        <Input 
                          value={this.state.countertopSize}
                          onChange={this.handleInputChange}
                          name="countertopSize"
                          />   
                      </Col>
                      <label>sq. ft.</label>
                    </Row>

                    {/* input on cabinets treatment */} 
                    <Row>
                      <Col size="col-md-5">
                        <label>Cabinets (Install or Reface)</label>
                      </Col>
                      <Col size="col-md-5">
                        <select defaultValue={this.state.selectValue} onChange={this.handleInputChange} name="cabinetsTreatment">
                          <option value="-1" abled>Select Option</option>
                          <option value="new-basic">New Basic</option>
                          <option value="new-enhanced">New Enhanced (with Island)</option>
                          <option value="new-premium">New Premium (with Island)</option>
                          <option value="ref-basic">Basic Refacing</option>
                          <option value="ref-enhanced">Enhanced Refacing (with Island)</option>
                          <option value="ref-premium">Premium Refacing</option>
                        </select>
                      </Col>  
                    </Row> 
                    <br />
                    
                  {/* input on countertop materials */}
                    <Row>
                      <Col size="col-md-5">
                        <label>Countertop Material</label>
                      </Col>
                      <Col size="col-md-5">
                        <select defaultValue={this.state.selectValue} onChange={this.handleInputChange} name="countertopMaterial">
                          <option value="-1" abled>Select Option</option>
                          <option value="granite">Granite</option>
                          <option value="laminate">Laminate</option>
                          <option value="quartz">Quartz</option>
                        </select>   
                      </Col>  
                    </Row>
                    <br />

                  {/* input on kitchen fixtures */}
                    <Row>
                      <Col size="col-md-5">
                        <label>Kitchen Fixtures (Sink, Faucet, Garbage Disposal)</label>
                      </Col>
                      <Col size="col-md-5">
                        <select defaultValue={this.state.selectValue} onChange={this.handleInputChange} name="kitchenFixtures">
                          <option value="-1" abled>Select Option</option>
                          <option value="basic">Basic</option>
                          <option value="mid">Mid Range</option>
                          <option value="premium">Premium</option>
                        </select>   
                      </Col>  
                    </Row>

                  {/* input on kitchen flooring */}
                    <Row>
                      <Col size="col-md-5">
                        <label>New Kitchen Flooring</label>
                      </Col>
                      <Col size="col-md-5">
                        <select defaultValue={this.state.selectValue} onChange={this.handleInputChange} name="flooring">
                          <option value="-1" abled>Select Option</option>
                          <option value="tile">New Tile Flooring</option>
                          <option value="hardwood">New Hardwood Flooring</option>
                          <option value="lineoleum">New Linoleum Flooring</option>
                        </select>   
                      </Col>  
                    </Row>
                    <br />

                  {/* input on appliances */}
                    <Row>
                      <Col size="col-md-5">
                        <label>New Appliances (Fridge, Oven, Rangehood)</label>
                      </Col>
                      <Col size="col-md-5">
                        <select defaultValue={this.state.selectValue} onChange={this.handleInputChange} name="appliances">
                          <option value="-1" abled>Select Option</option>
                          <option value="basic">Basic Appliances</option>
                          <option value="mid">Mid Range Appliances</option>
                          <option value="premium">Premium Appliances</option>
                          <option value="premium-builtin">Premium Built-In Appliances</option>
                        </select>   
                      </Col>  
                    </Row>
                   

                  {/* input on paint walls */}
                    <Row>
                      <Col size="col-md-5">
                        <label>Paint Walls</label>
                      </Col>
                      <Col size="col-md-5">
                        <select defaultValue={this.state.selectValue} onChange={this.handleInputChange} name="paintWalls">
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

export default KitchenCalculator;