#!/bin/sh
protoc --dart_out="./lib/gen" ./protos/protos.proto
protoc --swift_out=./ios/Classes ./protos/protos.proto