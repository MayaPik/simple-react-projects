import { Table, TableHead, TableRow, TableCell } from "@mui/material";
import "./App.css";
const VehicleTable = ({ vehicle }) => {
  return (
    <div className="data">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Vehicle Name</b>
            </TableCell>
            <TableCell>{vehicle.name && vehicle.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>Related Home planets and their population</b>
            </TableCell>
            <TableCell>
              {vehicle.pilots &&
                vehicle.pilots.map(
                  (pilot) =>
                    pilot.homeWorldData.name +
                    ", " +
                    pilot.homeWorldData.population
                )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>Related Pilot Names</b>
            </TableCell>
            <TableCell>
              {vehicle.pilots &&
                vehicle.pilots.map((pilot) => pilot.pilotData.name)}
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </div>
  );
};

export default VehicleTable;
