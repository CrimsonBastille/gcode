# gcode

gcode is a library designed to help you programmatically generate command sequences for gcode CNC machines. It provides a set of classes representing various gcode commands, along with utility classes like `CmdGroup` for organizing commands and `gcodePrinter` for outputting the final command sequence in a format suitable for the machine.

## Available Commands

Below is a list of the available commands. These can be found in the `./src/commands` directory.

*   `Comment`
*   `CutCircle`
*   `CutCircleCenter`
*   `CutGCircle`
*   `FileLoadPartFile`
*   `Input`
*   `Jog2`
*   `Jog3`
*   `Jog4`
*   `JogA`
*   `JogB`
*   `JogSpeed`
*   `JogX`
*   `JogY`
*   `JogZ`
*   `Move2`
*   `Move3`
*   `Move5`
*   `MoveB`
*   `MoveSetSpeed`
*   `MoveX`
*   `MoveY`
*   `MoveZ`
*   `Pause`
*   `SetAbsolute`
*   `SetContinuousMovement`
*   `SetOutputSwitch`
*   `ValAxis`
*   `ValComm`
*   `ValuesCutterParameters`
*   `ValuesDisplaySettings`
*   `ZeroA`
*   `ZeroB`

```js
import { CmdGroup, GcodePrinter, MoveZ } from '@nebulaglitch/gcode';

const group = new CmdGroup('Test');
group.push(new MoveZ(0.332425334));

const output = GcodePrinter.print(group);
console.log('\n\' Test\nG1 Z0.3324\n');
```