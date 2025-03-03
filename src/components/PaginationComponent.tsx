
import { Button, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight, MoreHoriz } from "@mui/icons-material";

const PaginationComponent = () => {
  return (
    <div className="flex items-center justify-between p-4 rounded-md">
      <Button variant="contained" color="primary">Start Generation</Button>
      <div className="flex items-center space-x-2">
        <IconButton color="default">
          <ChevronLeft />
        </IconButton>
        <Button variant="contained" color="primary">1</Button>
        <Button variant="outlined">2</Button>
        <Button variant="outlined">3</Button>
        <MoreHoriz />
        <Button variant="outlined">10</Button>
        <IconButton color="default">
          <ChevronRight />
        </IconButton>
      </div>
    </div>
  );
};

export default PaginationComponent;
