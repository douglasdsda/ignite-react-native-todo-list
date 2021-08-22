import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    setTasks(old => [...old, newTask])
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
  
    const list = [...tasks]
    const itemFindIndex = list.findIndex(item => item.id == id)
    if(itemFindIndex >= 0){
      list[itemFindIndex].done = true;
 
      setTasks(list);
    }

  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(old => old.filter(item => item.id != id))
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})