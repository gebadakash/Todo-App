export function Todoitem2() {

    let todoname = 'Go to college';
    let tododate = '4/10/2023';

  return (
    <div className="container">
      <div className="row ak-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger ak-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
