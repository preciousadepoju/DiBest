

const Form = ({ show }) => {
    console.log(show);
  return (
      <form action="" className={`${show ? "block" : "hidden"} flex flex-col bg-white rounded-lg absolute top-0`}>
          <div className="flex flex-col space-y-3">
              <label htmlFor="">Name</label>
              <input type="text" />
          </div>
          <div className="flex flex-col space-y-3">
              <label htmlFor="">Name</label>
              <input type="text" />
          </div>
          <div className="flex flex-col space-y-3">
              <label htmlFor="">Name</label>
              <input type="text" />
          </div>
          <div className="flex flex-col space-y-3">
              <label htmlFor="">Name</label>
              <input type="text" />
          </div>
          <div className="flex flex-col space-y-3">
              <label htmlFor="">Name</label>
              <input type="text" />
          </div>
          <div className="flex flex-col space-y-3">
              <label htmlFor="">Name</label>
              <input type="text" />
          </div>
          <div className="flex flex-col space-y-3">
              <label htmlFor="">Name</label>
              <input type="text" />
          </div>
          <div className="flex flex-col space-y-3">
              <label htmlFor="">Name</label>
              <input type="text" />
          </div>
          <div className="flex flex-col space-y-3">
              <label htmlFor="">Name</label>
              <input type="text" />
          </div>
      </form>
  )
}

export default Form
