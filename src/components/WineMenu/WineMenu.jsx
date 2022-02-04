import * as React from "react";
import MenuItem from "..//Menu/MenuItem";
import WineMenuContainer from "./WineMenuContainer";
import WineMenuNav from "./WineMenuNav";

const WineMenu = () => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  const WhiteWineTab = () => {
    return (
      <>
        <h2>White Wine</h2>
        <div className="group">
          <MenuItem name="Chardonnay / Trebbiano">Nespolino, Italy</MenuItem>
          <MenuItem name="Pinot White">Dogheria Rubicone IGT, Italy</MenuItem>
          <MenuItem name="Sauvignon Blanc">Tolten, Chile</MenuItem>
          <MenuItem name="Riesling">Clean Slate, Germany</MenuItem>
          <MenuItem name="Pinot Grigio">Luigi Righetti, Italy</MenuItem>
          <MenuItem name="Chardonnay">Gnarly Head, California</MenuItem>
          <MenuItem name="Sauvignon Blanc">Oyster Bay, New Zealand</MenuItem>
          <MenuItem name="Sparkling Wine">Henkell 200ml, Germany</MenuItem>
        </div>
      </>
    );
  };

  const RedWineTab = () => {
    return (
      <>
        <h2>Red Wine</h2>
        <div className="group">
          <MenuItem name="Sangiovese / Merlot">Nespolino, Italy</MenuItem>
          <MenuItem name="Ripasso DOC">Soprasasso Valpolcella, Italy</MenuItem>
          <MenuItem name="Malbec">Dona Paula, Argentina</MenuItem>
          <MenuItem name="Chianti">Fontella, Italy</MenuItem>
          <MenuItem name="Cabernet Sauvignon">Crusher, California</MenuItem>
          <MenuItem name="Cotes Du Ventoux Red">Ogier, France</MenuItem>
          <MenuItem name="Pinot Noir">Irony, California</MenuItem>
          <MenuItem name="Ventoux Rose">Ogier, France</MenuItem>
        </div>
      </>
    );
  };

  const BeerTab = () => {
    return (
      <>
        <h2>Beer</h2>
        <div className="group">
          <MenuItem name="Imported Beer">
            Asahi, Sapporo, Kirin, Heineken (500 ml can)
          </MenuItem>
          <MenuItem name="Import Selection">Sapporo, Kirin (650 ml)</MenuItem>
          <MenuItem name="Domestic Selection">
            Canadian, Coors Light (650 ml)
          </MenuItem>
          <MenuItem name="Import Selection">Asahi (640 ml)</MenuItem>
          <MenuItem name="Import Selection">
            Asahi Heineken (500 ml can)
          </MenuItem>
        </div>
      </>
    );
  };

  const SakeTab = () => {
    return (
      <>
        <h2>Sake</h2>
        <div className="group">
          <MenuItem name="Hot Sake">Market price</MenuItem>
          <MenuItem name="Cold Sake">Market price</MenuItem>
          <MenuItem name="Soju">Market price</MenuItem>
        </div>
      </>
    );
  };

  const WineTabs = [<WhiteWineTab />, <RedWineTab />, <BeerTab />, <SakeTab />];

  return (
    <WineMenuContainer>
      <div className="content">
        <h1>Wine and Beer</h1>
        <hr></hr>
        <WineMenuNav
          activeTabIndex={activeTabIndex}
          onClick={setActiveTabIndex}
        />
        {WineTabs[activeTabIndex]}
      </div>
    </WineMenuContainer>
  );
};

export default WineMenu;
