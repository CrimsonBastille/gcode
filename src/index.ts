import Command from './command';
import CmdGroup from './cmdgroup';
import GcodePrinter from './gcodeprinter';
import FeedVelocity from './commands/feedvelocity';
import SpindleSpeed from './commands/spindlespeed';
import RapidMove from './commands/rapidmove';
import FeedMove from './commands/feedmove';
import Comment from './commands/comment';
import Dwell from './commands/dwell';
import ClockwiseArc from './commands/clockwisearc';
import CounterClockwiseArc from './commands/counterclockwisearc';
import SubprogramCall from './commands/subprogramcall';
import SetLocalCoordinates from './commands/setlocalcoordinates';
import MacroCall from './commands/macrocall';
import GMacroCall from './commands/gmacrocall';
import ToolSelect from './commands/toolselect';
import Question from './commands/question';
import JogZ from './commands/jogz';
import JogY from './commands/jogy';
import JogW from './commands/jogw';
import Jog2 from './commands/jog2';
import Jog4 from './commands/jog4';
import Move2 from './commands/move2';
import MoveZ from './commands/movez';
import MoveX from './commands/movex';
import MoveY from './commands/movey';
import MoveW from './commands/movew';
import CutGCircle from './commands/cutgcircle';
import AbsoluteMode from './commands/absolutemode';
import Literal from './commands/literal';
import Mach3Comment from './commands/mach3comment';
import ArcMove from './commands/arcmove';

const name = 'Gcode',
    version = '0.0.1';

const myObject = {
    name,
    version
};

export {
    name, myObject, Command, CmdGroup, ClockwiseArc, CounterClockwiseArc,
    Dwell, GcodePrinter, FeedVelocity, SpindleSpeed, RapidMove, FeedMove, Comment,
    SetLocalCoordinates, SubprogramCall, ToolSelect, MacroCall, GMacroCall, Question,
    JogZ, JogY, JogW, Jog2, Jog4, Move2, MoveZ, MoveY, MoveX, MoveW, CutGCircle, AbsoluteMode, Literal,
    Mach3Comment, ArcMove
};
