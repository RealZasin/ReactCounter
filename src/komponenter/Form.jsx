export function Form() {
    function consoleLog() {
        console.log()
    }
    return (
      <>
        <div>
          <form>
                <h3>Brukernavn:</h3>
                <input type="text" />
                <br></br>
                <h3>Passord:</h3>
                <input type="password" />
            <br></br>
            <br></br>
                <button onClick="consoleLog()">Submit</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </form>
        </div>
      </>
    );
}