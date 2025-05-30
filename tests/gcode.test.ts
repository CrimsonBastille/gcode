'use strict';

import { describe, expect, test } from '@jest/globals';
import {
  AbsoluteMode,
  ArcMove,
  ClockwiseArc,
  CmdGroup,
  Comment,
  CounterClockwiseArc,
  CutGCircle,
  Dwell,
  FeedMove,
  FeedVelocity,
  GcodePrinter,
  GMacroCall,
  Jog2,
  Jog4,
  JogW,
  JogY,
  JogZ,
  Literal,
  Mach3Comment,
  MacroCall,
  Move2,
  MoveW,
  MoveX,
  MoveY,
  MoveZ,
  myObject,
  Question,
  RapidMove,
  SetLocalCoordinates,
  SpindleSpeed,
  SubprogramCall,
  ToolSelect,
} from '../src/index';

describe('Tests for GCode', () => {

  test('Retrieve One User', async () => {
    expect(myObject.name).toBe('Gcode');
    expect(myObject.version).toBe('0.0.1');
  });

  test('Assert CmdGroup Formatting', async () => {
    const group = new CmdGroup('Test');
    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\n');
  });

  test('Assert FeedVelocity Formatting', async () => {
    const group = new CmdGroup('Test');
    group.push(new FeedVelocity(6000));

    const output = GcodePrinter.print(group);
    expect(output).toBe('\n[ Test ]\nF6000\n');
  });

  test('Assert SpindleSpeed Formatting', async () => {
    const group = new CmdGroup('Test');
    group.push(new SpindleSpeed(5000));

    const output = GcodePrinter.print(group);
    expect(output).toBe('\n[ Test ]\nS5000\n');
  });

  test('Assert RapidMove Formatting', async () => {
    const group = new CmdGroup('Test');
    group.push(new RapidMove(50, 60, 70));

    const output = GcodePrinter.print(group);
    expect(output).toBe('\n[ Test ]\nG0 X50 Y60 Z70\n');
  });

  test('Assert FeedMove Formatting', async () => {
    const group = new CmdGroup('Test');
    group.push(new FeedMove(50, 60, 70));

    const output = GcodePrinter.print(group);
    expect(output).toBe('\n[ Test ]\nG1 X50 Y60 Z70\n');
  });

  test('Assert FeedMove Formatting', async () => {
    const group = new CmdGroup('Test');
    group.push(new FeedMove(50, 60, 70, null, 1000));

    const output = GcodePrinter.print(group);
    expect(output).toBe('\n[ Test ]\nG1 X50 Y60 Z70 F1000\n');
  });

  test('Assert ArcMove Formatting Clockwise', async () => {
    const group = new CmdGroup('Test');
    group.push(new ArcMove(true, 4, 2, 1.1211, 0));

    const output = GcodePrinter.print(group);
    expect(output).toBe('\n[ Test ]\nG2 X4 Y2 I1.1211 J0\n');
  });

  test('Assert ArcMove Formatting Counter-Clockwise', async () => {
    const group = new CmdGroup('Test');
    group.push(new ArcMove(false, 4, 2, 1.2240, 0));

    const output = GcodePrinter.print(group);
    expect(output).toBe('\n[ Test ]\nG3 X4 Y2 I1.2240 J0\n');
  });

  test('Assert AbsoluteMode Formatting', async () => {
    const group = new CmdGroup('Test');
    group.push(new AbsoluteMode());

    const output = GcodePrinter.print(group);
    expect(output).toBe('\n[ Test ]\nG90\n');
  });

  test('Assert RapidMove Formatting with Zeros', async () => {
    const group = new CmdGroup('Test');
    group.push(new RapidMove(0, 0));

    const output = GcodePrinter.print(group);
    expect(output).toBe('\n[ Test ]\nG0 X0 Y0\n');
  });

  test('Assert RapidMove Formatting with Nulls', async () => {
    const group = new CmdGroup('Test');
    group.push(new RapidMove(null, null, 40));

    const output = GcodePrinter.print(group);
    expect(output).toBe('\n[ Test ]\nG0 Z40\n');
  });

  test('Assert RapidMove Formatting with W', async () => {
    const group = new CmdGroup('Test');
    group.push(new RapidMove(null, null, 40, 40));

    const output = GcodePrinter.print(group);
    expect(output).toBe('\n[ Test ]\nG0 Z40 W40\n');
  });

  test('Assert SetLocalCoordinates Formatting #1', async () => {
    const group = new CmdGroup('Test');
    group.push(new SetLocalCoordinates(null, null, 40));

    const output = GcodePrinter.print(group);
    expect(output).toBe('\n[ Test ]\nG92 Z40\n');
  });

  test('Assert SetLocalCoordinates Formatting #2', async () => {

    const group = new CmdGroup('Test');
    group.push(new SetLocalCoordinates(null, null, ''));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG92 Z\n');

  });

  test('Assert Dwell Formatting #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new Dwell(10));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG4X10\n');

  });

  test('Assert Dwell Formatting #2', async () => {

    const group = new CmdGroup('Test');
    group.push(new Dwell(0));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG4X0\n');

  });

  test('Assert CounterClockwiseArc #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new CounterClockwiseArc(23, 12, 222.01));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG3 X23 Y12 R222.0100\n');

  });

  test('Assert CounterClockwiseArc #2', async () => {

    const group = new CmdGroup('Test');
    group.push(new CounterClockwiseArc(23, null, 222.01));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG3 X23 R222.0100\n');

  });

  test('Assert ClockwiseArc #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new ClockwiseArc(23, 12, 222.01));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG2 X23 Y12 R222.0100\n');

  });

  test('Assert ClockwiseArc #2', async () => {

    const group = new CmdGroup('Test');
    group.push(new ClockwiseArc(23, null, 222.01));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG2 X23 R222.0100\n');

  });

  test('Assert SubprogramCall #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new SubprogramCall('logoonly.nc'));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nM98 logoonly.nc\n');

  });

  test('Assert ToolSelect #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new ToolSelect('2'));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nT2\n');

  });

  test('Assert MacroCall #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new MacroCall(3));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nM3\n');

  });

  test('Assert MacroCall #2', async () => {

    const group = new CmdGroup('Test');
    group.push(new MacroCall(3.1));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nM3.1\n');

  });

  test('Assert GMacroCall #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new GMacroCall(5));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG5\n');

  });

  test('Assert Question #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new Question('Hello'));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG5 T0 m "Hello"\n');

  });

  test('Assert JogZ #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new JogZ(50));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG0 Z50\n');

  });

  test('Assert JogY #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new JogY(50));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG0 Y50\n');

  });

  test('Assert JogW #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new JogW(50));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG0 W50\n');

  });

  test('Assert Jog2 #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new Jog2(50, 20));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG0 X50 Y20\n');

  });

  test('Assert Jog4 #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new Jog4(null, null, 50, 20));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG0 Z50 W20\n');

  });

  test('Assert MoveX #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new MoveX(50));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG1 X50\n');

  });

  test('Assert MoveY #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new MoveY(50));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG1 Y50\n');

  });

  test('Assert MoveZ #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new MoveZ(50));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG1 Z50\n');

  });

  test('Assert MoveW #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new MoveW(50));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG1 W50\n');

  });

  test('Assert Move2 #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new Move2(50, 40));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG1 X50 Y40\n');

  });

  test('Assert CutGCircle #1', async () => {

    const group = new CmdGroup('Test');
    group.push(new CutGCircle(
      100,
      20,
      30,
      null,
      null,
      'T',
      -1,
      -20,
      null,
    ));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nG3 X20 Y30 R50 I-20\n');

  });

  test('Assert Literal Formatting', async () => {

    const group = new CmdGroup('Test');
    group.push(new Literal('C9393FOO'));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\nC9393FOO\n');

  });

  test('Assert Comment', async () => {

    const group = new CmdGroup('Test');
    group.push(new Comment('Hello There'));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\n\n[ Hello There ]\n');

  });

  test('Assert Commented Command', async () => {

    const group = new CmdGroup('Test');
    group.push(new Comment(new Literal('C9393F00')));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\n\n[ C9393F00 ]\n');

  })
  test('Assert Commented Command w/o newline', async () => {

    const group = new CmdGroup('Test');
    group.push(new Comment(new Literal('C9393F00'), false));

    const output = GcodePrinter.print(group);

    expect(output).toBe('\n[ Test ]\n[ C9393F00 ]\n');

  });

  test('Assert Mach3 Commented Command', async () => {

    const group = new CmdGroup('Test');
    group.push(new Mach3Comment(new Literal('C9393F00')));

    const output = GcodePrinter.print(group);
    expect(output).toBe('\n[ Test ]\n\n( C9393F00)\n');

  })

  test('Assert Mach3 Commented Command w/o newline', async () => {
    const group = new CmdGroup('Test');
    group.push(new Mach3Comment(new Literal('C9393F00'), false));

    const output = GcodePrinter.print(group);
    expect(output).toBe('\n[ Test ]\n( C9393F00)\n');

  });

});