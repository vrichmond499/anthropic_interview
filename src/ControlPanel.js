import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// import { useState } from 'react';
// const SERVER_VALUES = ["server1", "server2"];
const SERVER_VALUES = ["server1", "server2"];

function ControlPanel({server, updateServer}) {
  // const [server, updateServer] = useState(SERVER_VALUES[0]);
  // const [top, updateServer] = useState(SERVER_VALUES[0]);
  // const [server, updateServer] = useState(SERVER_VALUES[0]);
  // const [server, updateServer] = useState(SERVER_VALUES[0]);
  // const [server, updateServer] = useState(SERVER_VALUES[0]);

  function handleServerDropdownChange(event) {
    updateServer(event.target.value);
  }

  // TODO: make shared component for textfield styling if wanted

  return (<div>
    <TextField
      select
      label="Server"
      value={server}
      onChange={handleServerDropdownChange}
    >
      {SERVER_VALUES.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
    <TextField label="Top P" variant="outlined" />
    <TextField label="Top k" variant="outlined" />
    <TextField label="Temp" variant="outlined" />
    <TextField label="Sample Length (# of words)" variant="outlined" />
    <TextField label="Stop Sequence" variant="outlined" />
  </div>
  );
}

export default ControlPanel;
