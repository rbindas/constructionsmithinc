import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input } from "../../components/Form";
import "./FloorReplacementCalculator.css";
import { Button } from 'react-bootstrap';




class FloorReplacementCalculator extends Component {
  state = {
    length: " ",
    width: " ",
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
    if (this.state.length &&
        this.state.width && 
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
    const lowCarpetCostPerSqFt = 3;
    const midCarpetCostPerSqFt = 4.11;
    const hiCarpetCostPerSqFt = 11.11;
    
    const lowHardwoodCostPerSqFt = 7.50;
    const midHardwoodCostPerSqFt = 9;
    const hiHardwoodCostPerSqFt = 11.5;

    const lowLaminateCostPerSqFt = 5;
    const midLaminateCostPerSqFt = 8.75;
    const hiLaminateCostPerSqFt = 10.5;

    const lowTileCostPerSqFt = 8.50;
    const midTileCostPerSqFt = 12.5;
    const hiTileCostPerSqFt = 15.5;

    const lowLinoleumCostPerSqFt = 5.50;
    const midLinoleumCostPerSqFt = 6;
    const hiLinoleumCostPerSqFt = 6.5;

    const lowStoneCostPerSqFt = 19;
    const midStoneCostPerSqFt = 23;
    const hiStoneCostPerSqFt = 25;

    const remCarpetCostPerSqFt = 1.25;
    const remHardwoodCostPerSqFt = 3;
    const remLaminateCostPerSqFt = 1.25;
    const remTileCostPerSqFt = 3.25;

    const installSubCostPerSqFt = 3;
    const installTrimCostPerLnFt = 10.50;

    let totalSqFt = this.state.length * this.state.width;
    console.log("total sqft is " + totalSqFt);
    let totalLnFt = (this.state.length * 2) + (this.state.width * 2);
    console.log("total ln ft is " + totalLnFt);
    let materialCost;
    let remFloorCost;
    let installSubFloorCost;
    let installTrimCost;


    if (this.state.installSubfloor === "yes") {
      installSubFloorCost = installSubCostPerSqFt * totalSqFt;
      console.log("install subfloor cost is " + installSubFloorCost);
      if (this.state.installTrim === "no") {
        installTrimCost = 0;
        } else {
          installTrimCost = installTrimCostPerLnFt * totalLnFt;
          console.log("install trim cost is " + installTrimCost);
        };
      if (this.state.material === "carpets") {
        if (this.state.quality === "low-end") {
            materialCost = lowCarpetCostPerSqFt * totalSqFt;
          } else if (this.state.quality === "mid-range") {
            materialCost = midCarpetCostPerSqFt * totalSqFt;
          } else if (this.state.quality === "hi-end") {
            materialCost = hiCarpetCostPerSqFt * totalSqFt;
            };    
      } else if (this.state.material === "hardwood") {
            if (this.state.quality === "low-end") {
              materialCost = lowHardwoodCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "mid-range") {
              materialCost = midHardwoodCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "hi-end") {
              materialCost = hiHardwoodCostPerSqFt * totalSqFt;
            };
      } else if (this.state.material === "laminate") {
            if (this.state.quality === "low-end") {
              materialCost = lowLaminateCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "mid-range") {
              materialCost = midLaminateCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "hi-end") {
              materialCost = hiLaminateCostPerSqFt * totalSqFt;
            };
      } else if (this.state.material === "naturalStone") {
            if (this.state.quality === "low-end") {
              materialCost = lowStoneCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "mid-range") {
              materialCost = midStoneCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "hi-end") {
              materialCost = hiStoneCostPerSqFt * totalSqFt;
            };
      } else if (this.state.material === "porcelain") {
            if (this.state.quality === "low-end") {
              materialCost = lowTileCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "mid-range") {
              materialCost = midTileCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "hi-end") {
              materialCost = hiTileCostPerSqFt * totalSqFt;
            };           
      } else if (this.state.material === "vinyl") {
            if (this.state.quality === "low-end") {
              materialCost = lowLinoleumCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "mid-range") {
              materialCost = midLinoleumCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "hi-end") {
              materialCost = hiLinoleumCostPerSqFt * totalSqFt;
            };
          };
           console.log(this.state.material + this.state.quality + materialCost);            
      if (this.state.removeOldFloor === "no") {
        remFloorCost = 0;        
        } else if (this.state.removeOldFloor === "yes-carpet") {
          remFloorCost = remCarpetCostPerSqFt * totalSqFt;      
        } else if (this.state.removeOldFloor === "yes-hardwood") {
          remFloorCost = remHardwoodCostPerSqFt * totalSqFt;    
        } else if (this.state.removeOldFloor === "yes-laminate") {
          remFloorCost = remLaminateCostPerSqFt * totalSqFt;  
        } else if (this.state.removeOldFloor === "yes-tile") {
          remFloorCost = remTileCostPerSqFt * totalSqFt;  
        }; 
        console.log(this.state.removeOldFloor + remFloorCost);
      this.state.totalCost = installSubFloorCost + installTrimCost + materialCost + remFloorCost;  
    }
      else if (this.state.installSubfloor === "no") {
        if (this.state.installTrim === "no") {
        installTrimCost = 0;
        } else {
          installTrimCost = installTrimCostPerLnFt * totalLnFt;
          console.log("install trim cost is " + installTrimCost);
        };
      if (this.state.material === "carpets") {
        if (this.state.quality === "low-end") {
            materialCost = lowCarpetCostPerSqFt * totalSqFt;
          } else if (this.state.quality === "mid-range") {
            materialCost = midCarpetCostPerSqFt * totalSqFt;
          } else if (this.state.quality === "hi-end") {
            materialCost = hiCarpetCostPerSqFt * totalSqFt;
            };    
      } else if (this.state.material === "hardwood") {
            if (this.state.quality === "low-end") {
              materialCost = lowHardwoodCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "mid-range") {
              materialCost = midHardwoodCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "hi-end") {
              materialCost = hiHardwoodCostPerSqFt * totalSqFt;
            };
      } else if (this.state.material === "laminate") {
            if (this.state.quality === "low-end") {
              materialCost = lowLaminateCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "mid-range") {
              materialCost = midLaminateCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "hi-end") {
              materialCost = hiLaminateCostPerSqFt * totalSqFt;
            };
      } else if (this.state.material === "naturalStone") {
            if (this.state.quality === "low-end") {
              materialCost = lowStoneCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "mid-range") {
              materialCost = midStoneCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "hi-end") {
              materialCost = hiStoneCostPerSqFt * totalSqFt;
            };
      } else if (this.state.material === "porcelain") {
            if (this.state.quality === "low-end") {
              materialCost = lowTileCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "mid-range") {
              materialCost = midTileCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "hi-end") {
              materialCost = hiTileCostPerSqFt * totalSqFt;
            };           
      } else if (this.state.material === "vinyl") {
            if (this.state.quality === "low-end") {
              materialCost = lowLinoleumCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "mid-range") {
              materialCost = midLinoleumCostPerSqFt * totalSqFt;
            } else if (this.state.quality === "hi-end") {
              materialCost = hiLinoleumCostPerSqFt * totalSqFt;
            };
          };
           console.log(this.state.material + this.state.quality + materialCost);            
      if (this.state.removeOldFloor === "no") {
        remFloorCost = 0;        
        } else if (this.state.removeOldFloor === "yes-carpet") {
          remFloorCost = remCarpetCostPerSqFt * totalSqFt;      
        } else if (this.state.removeOldFloor === "yes-hardwood") {
          remFloorCost = remHardwoodCostPerSqFt * totalSqFt;    
        } else if (this.state.removeOldFloor === "yes-laminate") {
          remFloorCost = remLaminateCostPerSqFt * totalSqFt;  
        } else if (this.state.removeOldFloor === "yes-tile") {
          remFloorCost = remTileCostPerSqFt * totalSqFt;  
        }; 
        console.log(this.state.removeOldFloor + remFloorCost);
      this.state.totalCost = installTrimCost + materialCost + remFloorCost;  
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
                    
                    {/* input on the floor size */}
                    <Row>
                      <Col size="col-md-5">
                        <label>Floor Size</label>
                      </Col>
                      <Col size="col-md-2">
                        <Input 
                          value={this.state.length}
                          onChange={this.handleInputChange}
                          name="length"
                          placeholder="length ft"
                          />
                      </Col>
                      <Col size="col-md-1">
                        <h5>X</h5>
                      </Col>
                      <Col size="col-md-2">
                        <Input 
                          value={this.state.width}
                          onChange={this.handleInputChange}
                          name="width"
                          placeholder="width ft"
                          />    
                      </Col>
                     
                      

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
                          <option value="naturalStone">Natural Stone</option>
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
                          <option value="yes-hardwood">Yes - Hardwood</option>
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