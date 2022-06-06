### Prototype

The prototype pattern is a useful way to share properties among many objects of the same type. The prototype is an
object that's native to JavaScript, and can be accessed by objects through the prototype chain.

In our applications, we often have to create many objects of the same type. A useful way of doing this is by creating
multiple instances of an ES6 class.

#### Плюсы

The prototype pattern allows us to easily let objects access and inherit properties from other objects. Since the
prototype chain allows us to access properties that aren't directly defined on the object itself, we can avoid
duplication of methods and properties, thus reducing the amount of memory used.

#### Минусы