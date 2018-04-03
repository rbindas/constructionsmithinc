import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input } from "../../components/Form";
import "./KitchenCalculator.css";
import { Button } from 'react-bootstrap';



class KitchenCalculator extends Component {
  state = {
    kitchenSize: " ",
    cabinetsLength: " ",
    countertopSize: " ",
    ceilingHeight: " ",
    cabinetsType: " ",
    countertopMaterial: " ",
    kitchenFixtures: " ",
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
    if (this.state.kitchenSize && 
        this.state.cabinetsLength && 
        this.state.countertopSize && 
        this.state.ceilingHeight && 
        this.state.cabinetsType && 
        this.state.countertopMaterial && 
        this.state.kitchenFixtures && 
        this.state.paintWalls &&
        this.state.floorType && 
        this.state.appliances) {
          this.calculateCost();
          this.setState({
            [name]:value
        });
      } 
  };

  calculateCost = () => {
    
   {/* paint cost per sq ft */} 
    const paintCostPerSqFt = 22.50;
  {/* appliances package cost */}
    const lowEndAppliances = 5000;
    const midRangeAppliances = 10000;
    const luxuryAppliances = 30000;
  {/* countertop cost per sq ft */}
    const graniteCostPerSqFt = 65;
    const laminateCostPerSqFt = 35;
    const quartzCostPerSqFt = 125;
  {/* fixtures package cost.  Low end doesn't have garbage disposal */}
    const fixturesLowEnd = 450;
    const fixturesMidRange = 800;
    const fixturesPremium = 1200;
  {/* kitchen flooring cost per sq ft */}
    const tileFloorCostPerSqFt = 15;
    const hardwoodFloorCostPerSqFt = 12;
    const linoleumFloorCostPerSqFt = 7.50;
    const laminateFloorCostPerSqFt = 10;
  {/* cabinet cost per ln ft */}
    const basicCabinetCostPerLnFt = 150;
    const enhancedCabinetCostPerLnFt = 225;
    const premiumCabinetCostPerLnFt = 325;

    let paintCost;
    let totalCost;
    let countertopCost;
    let floorCost;
    let cabinetCost;
    let fixturesCost;
    let appliancesCost;

    
    if (this.state.paintWalls === "yes") {
      paintCost = paintCostPerSqFt * this.state.kitchenSize;
      console.log("Paint Cost is " + paintCost);
      
      if (this.state.floorType === "tile-floor") {
        floorCost = tileFloorCostPerSqFt * this.state.kitchenSize;
        console.log("Tile Floor cost is " + floorCost);
      } else if (this.state.floorType === "hardwood-floor"){
        floorCost = hardwoodFloorCostPerSqFt * this.state.kitchenSize;
        console.log("Hardwood floor cost is " + floorCost);
      } else if (this.state.floorType === "lineoleum-floor"){
        floorCost = linoleumFloorCostPerSqFt * this.state.kitchenSize;
        console.log("Linoleum floor cost is " + floorCost);
      } else if (this.state.floorType === "laminate-floor"){
        floorCost = laminateFloorCostPerSqFt * this.state.kitchenSize;
        console.log("Laminate floor cost is " + floorCost);
      };
      
      if (this.state.countertopMaterial === "granite"){
        countertopCost = graniteCostPerSqFt * this.state.countertopSize;
        console.log("Granite countertop cost is " + countertopCost);
      } else if (this.state.countertopMaterial === "laminate"){
        countertopCost = laminateCostPerSqFt * this.state.countertopSize;
        console.log("Laminate countertop cost is " + countertopCost);
      } else if (this.state.countertopMaterial === "quartz"){
        countertopCost = quartzCostPerSqFt * this.state.countertopSize;
        console.log("Quartz countertop cost is " + countertopCost);    
      };
      
      if (this.state.cabinetsType === "basic-cab"){
        cabinetCost = basicCabinetCostPerLnFt * this.state.cabinetsLength;
        console.log("Basic cabinet cost is " + cabinetCost);
      } else if (this.state.cabinetsType === "enhanced-cab"){
        cabinetCost = enhancedCabinetCostPerLnFt * this.state.cabinetsLength;
        console.log("Enhanced cabinet cost is " + cabinetCost);
      } else if (this.state.cabinetsType === "premium-cab"){
        cabinetCost = premiumCabinetCostPerLnFt * this.state.cabinetsLength;
        console.log("Premium cabinet cost is " + cabinetCost);    
      };
    
      if (this.state.kitchenFixtures === "basic-fix"){
        fixturesCost = fixturesLowEnd;
        console.log("Basic fixtures cost is " + fixturesCost);
      } else if (this.state.kitchenFixtures === "mid-fix"){
        fixturesCost = fixturesMidRange;
        console.log("Mid-range fixtures cost is " + fixturesCost);
      } else if (this.state.kitchenFixtures === "premium-fix"){
        fixturesCost = fixturesPremium;
        console.log("Premium fixtures cost is " + fixturesCost);    
      };

      if (this.state.appliances === "basic-app"){
        appliancesCost = lowEndAppliances;
        console.log("Basic appliances cost is " + appliancesCost);
      } else if (this.state.appliances === "mid-app"){
        appliancesCost = midRangeAppliances;
        console.log("Mid-range appliances cost is " + appliancesCost);
      } else if (this.state.appliances === "premium-app"){
        appliancesCost = luxuryAppliances;
        console.log("Premium appliances cost is " + appliancesCost);    
      };

      this.state.totalCost = paintCost + floorCost + countertopCost + cabinetCost + fixturesCost + appliancesCost;
      console.log(this.state.totalCost);

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
                  <h4 className="panel-title">Kitchen Remodel Budget Estimator</h4>
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

                    {/* input on cabinets quality */} 
                    <Row>
                      <Col size="col-md-5">
                        <label>New Install Cabinets</label>
                      </Col>
                      <Col size="col-md-5">
                        <select defaultValue={this.state.selectValue} onChange={this.handleInputChange} name="cabinetsType">
                          <option value="-1" abled>Select Option</option>
                          <option value="basic-cab">Basic</option>
                          <option value="enhanced-cab">Enhanced (with Island)</option>
                          <option value="premium-cab">Premium (with Island)</option>
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
                          <option value="basic-fix">Basic</option>
                          <option value="mid-fix">Mid Range</option>
                          <option value="premium-fix">Premium</option>
                        </select>   
                      </Col>  
                    </Row>

                  {/* input on kitchen flooring */}
                    <Row>
                      <Col size="col-md-5">
                        <label>New Kitchen Flooring</label>
                      </Col>
                      <Col size="col-md-5">
                        <select defaultValue={this.state.selectValue} onChange={this.handleInputChange} name="floorType">
                          <option value="-1" abled>Select Option</option>
                          <option value="tile-floor">New Tile Flooring</option>
                          <option value="hardwood-floor">New Hardwood Flooring</option>
                          <option value="lineoleum-floor">New Linoleum Flooring</option>
                          <option value="laminate-floor">New Laminate Flooring</option>
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
                          <option value="basic-app">Basic Appliances</option>
                          <option value="mid-app">Mid Range Appliances</option>
                          <option value="premium-app">Premium Appliances</option>
                          <option value="premium-builtin-app">Premium Built-In Appliances</option>
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