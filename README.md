# node-backoff
Simple backoff in node.js

## Install

```shell
$ npm i node-backoff --save

```

## Options

- min min timeout in milliseconds, defaut:100
- max max timeout in milliseconds, default:10000
- factor every call to `duration()` it is multiplied by factor, default:2
- jitter randomization to the backoff durations,default:false

## Using

```shell

 let backoff = new Backoff();
 let d1 = backoff.duration();//100ms
 let d2 = backoff.duration();//200ms
 let d3 = backoff.duration();//400ms
 let d4 = backoff.duration();//800ms

 //or forAttempt()
 let t1 = backoff.forAttempt(2);//400ms

 backoff.reset();// reset attempts
```