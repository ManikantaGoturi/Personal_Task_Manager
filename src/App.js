import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form>
        <h1>Personal Task Manager</h1>
        <div className="TitleContainer">
          <label for="title">Title :</label>
          <input
            type="text"
            className="Title"
            placeholder="Enter TitleName"
            id="title"
          />
        </div>
        <div className="DescriptionContainer">
          <label for="description">Description :</label>
          <input
            type="text"
            className="Description"
            placeholder="Enter Descriptiton"
            id="description"
          />
        </div>
        <div className="DateContainer">
          <label for="Date">Due Date :</label>
          <input
            type="date"
            className="Date"
            id="Date"
            placeholder="EnterDate"
          />
        </div>
        <div>
          <button className="button" type="button">
            Submit
          </button>
        </div>
      </form>
      <div className="taskContainer">
        <h1>TaskViewer</h1>
        <ul className="listElements"></ul>
        <button className="Edit">Edit</button>
        <button className="Delete">Delete</button>
      </div>
    </div>
  );
}
