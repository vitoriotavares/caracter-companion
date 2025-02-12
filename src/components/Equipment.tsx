import { Box, Text, VStack, HStack, Icon, Button } from '@chakra-ui/react'
import { FaSuitcase, FaPlus } from 'react-icons/fa'

interface EquipmentItem {
  name: string
  quantity: number
  weight?: number
}

interface EquipmentProps {
  items: EquipmentItem[]
}

export const Equipment = ({ items }: EquipmentProps) => {
  return (
    <Box
      bg="brand.gray.700"
      p={4}
      borderRadius="lg"
      w="100%"
    >
      <HStack justify="space-between" mb={4}>
        <Text fontSize="lg" fontWeight="bold">Equipment</Text>
        <Button
          size="sm"
          variant="ghost"
          leftIcon={<FaPlus />}
          colorScheme="blue"
        >
          Add
        </Button>
      </HStack>
      <VStack align="stretch" spacing={2}>
        {items.map((item, index) => (
          <HStack
            key={index}
            justify="space-between"
            bg="brand.gray.800"
            p={2}
            borderRadius="md"
          >
            <HStack>
              <Icon as={FaSuitcase} color="gray.400" />
              <Text>{item.name}</Text>
            </HStack>
            <HStack spacing={4}>
              <Text color="gray.400" fontSize="sm">
                x{item.quantity}
              </Text>
              {item.weight && (
                <Text color="gray.400" fontSize="sm">
                  {item.weight} lb
                </Text>
              )}
            </HStack>
          </HStack>
        ))}
      </VStack>
    </Box>
  )
}
