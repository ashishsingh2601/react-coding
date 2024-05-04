import EconomyGrid from "./EconomyGrid";
import PremiumGrid from "./PremiumGrid";
import DeluxeGrid from "./DeluxeGrid";

const DraggableGrid = ({
  deluxeRows = 2,
  deluxeCols = 14,
  premiumRows = 3,
  premiumCols = 10,
  economyRows = 3,
  economyCols = 18,
}) => {
  return (
    <div className="super__container">
      <div className="grid__header">My Theatre</div>

      <div className="grid__type">
        <span className="grid__type--name">Economy</span>
        <EconomyGrid rows={economyRows} cols={economyCols} />
      </div>
      <div className="grid__type">
        <span className="grid__type--name">Premium</span>
        <PremiumGrid rows={premiumRows} cols={premiumCols} />
      </div>
      <div className="grid__type">
        <span className="grid__type--name">Deluxe</span>
        <DeluxeGrid rows={deluxeRows} cols={deluxeCols} />
      </div>
    </div>
  );
};

export default DraggableGrid;
