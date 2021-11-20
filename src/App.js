import Grid from '@mui/material/Grid';
import TextPanel from './TextPanel';
import ControlPanel from './ControlPanel';
import { useState } from 'react';

import './App.css';

const SERVER_VALUES = ["server1", "server2"];

function App() {
  const [server, updateServer] = useState(SERVER_VALUES[0]);


  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div style={{ backGroundColor: "blue" }}>
          <ControlPanel
          server={server}
          updateServer={updateServer}/>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div style={{ backGroundColor: "red" }}>
           <TextPanel
           server={server}
          />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
