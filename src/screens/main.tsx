import React, { useCallback, useState } from 'react'
import { Center, VStack } from 'native-base'
import ThemeToggle from '../components/ThemeToggle'
import TaskItem from '../components/TaskItem'

export default function MainScreen() {
  const [checked, setChecked] = useState(false)
  const handlePressCheckbox = useCallback(() => {
    setChecked(prev => !prev)
  }, [])

  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      flex={1}
    >
      <VStack space={5} alignItems="center" width="full">
        <TaskItem isDone={checked} onToggleCheckbox={handlePressCheckbox} subject="Task Item" />
        <ThemeToggle />
      </VStack>
    </Center>
  )
}
