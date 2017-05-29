/* eslint-disable no-unused-vars */
class Stack {
  constructor (capacity) {
    this._storage = {}
    this._capacity = capacity
    this._size = 0
  }
}

Stack.prototype.push = function (value) {
  if (this._size >= this._capacity) {
    return 'Max capacity already reached. Remove element before adding a new one.'
  }
  this._storage[this._size++] = value
  return this._size
}
// Time complexity: O(1)

Stack.prototype.pop = function () {
  let temp = this._storage[--this._size]
  delete this._storage[this._size]
  if (this._size < 0) this._size = 0
  return temp
}
// Time complexity:O(1)

Stack.prototype.peek = function () {
  return this._storage[this._size - 1]
}
// Time complexity:O(1)

Stack.prototype.size = function () {
  return this._size
}
// Time complexity:O(1)

Stack.prototype.contains = function (value) {
  for (let i = 0; i < this._size; i++) {
    if (this._storage[i] === value) return true
  }
  return false
}

Stack.prototype.until = function (value) {
  let numberUntil = 0
  for (let i = this._size - 1; i >= 0; i--) {
    if (this._storage[i] === value) return numberUntil
    numberUntil++
  }
  return 'Not found'
}

class Queue {
  constructor () {
    this._inbox = new Stack()
    this._outbox = new Stack()
  }
}

Queue.prototype.enqueue = function (value) {
  this._inbox.push(value)
}

Queue.prototype.inToOut = function () {
  if (this._inbox.size() === 0) {
    return console.log('nothing to dequeue')
  } else if (this._inbox.size() > 0) {
    this._outbox.push(this._inbox.pop())
    this.inToOut()
  }
}

Queue.prototype.dequeue = function () {
  if (this._outbox.size() === 0) {
    this.inToOut()
  }
  return this._outbox.pop()
}

Queue.prototype.size = function () {
  return this._inbox.size() + this._outbox.size()
}
