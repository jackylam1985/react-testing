declare module 'todo' {

  interface Todo {
    id?: number
    text: string
    completed: boolean
  }

  type TodoState = Todo[]
}
