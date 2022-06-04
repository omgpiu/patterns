#### PROVIDER

Делает данные доступные для дочерних компонент (элементов)

### ПЛЮСЫ

The Provider pattern/Context API makes it possible to pass data to many components, without having to manually pass it
through each component layer.

It reduces the risk of accidentally introducing bugs when refactoring code. Previously, if we later on wanted to rename
a prop, we had to rename this prop throughout the entire application where this value was used.

We no longer have to deal with prop-drilling, which could be seen as an anti-pattern. Previously, it could be difficult
to understand the dataflow of the application, as it wasn't always clear where certain prop values originated. With the
Provider pattern, we no longer have to unnecessarily pass props to component that don't care about this data.

Keeping some sort of global state is made easy with the Provider pattern, as we can give components access to this
global state.

### МИНУСЫ
