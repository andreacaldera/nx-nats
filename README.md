# Nats message type safety

What this POC does:

- Add zop validation to messages received from Nats
- Create a wrapper for the `MessageClient` to ensure data and pattern match based on message definition

## How to run

`pnpm start:all`

Visit `http://localhost:3001/api/create-order` to trigger an example of successful message
Visit `http://localhost:3001/api/create-order-broken` to see trigger an example of a message failing validation

## What I couldn't do

As far as I'm aware, it's not possible to do type narrowing on function input parameters based on a decorator (or least I couldn't do it!).

Therefor on controller receiving messages from Nats, the type has to be manually matched between the decorator and the input parameter.

e.g.

```
@NatsReceiver('createOrder', createOrderSchema)
async createOrder(@Payload() payload: CreateOrderDto) {
return 'Some data'
}
```

Where there is not type safety between `createOrderSchema` from the annotation and `CreateOrderDto` as a function input parameter.
