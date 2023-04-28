import { MDBBtn } from "mdb-react-ui-kit";

export function getPriorityText(priority) {
  const parsedPriority = parseInt(priority);

  switch (parsedPriority) {
    case 1:
      return (
        <MDBBtn rounded className="p-2 prio-btn low">
          Low
        </MDBBtn>
      );
    case 2:
      return (
        <MDBBtn rounded className="p-2 prio-btn moderate">
          Moderate
        </MDBBtn>
      );
    case 3:
      return (
        <MDBBtn rounded className="p-2 prio-btn high">
          High
        </MDBBtn>
      );
    default:
      return (
        <MDBBtn rounded className="p-2 prio-btn unk">
          Unknown
        </MDBBtn>
      );
  }
}
