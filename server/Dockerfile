# syntax=docker/dockerfile:1

# Stage 1: build
FROM golang:1.19-alpine as builder

RUN mkdir /build
WORKDIR /build

COPY . .
RUN go build main.go

# Stage 2: run binary
FROM alpine:3.11

COPY --from=builder /build/main /usr/local/bin/server
WORKDIR /usr/local/bin

CMD ["/usr/local/bin/server"]