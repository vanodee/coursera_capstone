import {
    Heading,
    Text,
    Stack,
    Button,
    Image,
    Flex,
    Card,
    CardBody,
    CardFooter
} from "@chakra-ui/react";


export default function HighlightCard(props) {
  return (
      <Card
          bg={'highlight.1'}
          borderTopRadius='2rem'
          key={props.id}
      >
          <Image
              objectFit={'cover'}
              src={props.Image}
              h={'250px'}
              alt={props.Title}
              borderTopRadius='2rem'
          />
          <CardBody>
              <Stack mt='6' spacing='3'>
                  <Flex justifyContent={'space-between'} alignItems={'center'}>
                      <Heading size='md'>{props.Title}</Heading>
                      <Text color={'secondary.1'} fontWeight={'semibold'}>{props.Price}</Text>
                  </Flex>
                  <Text color={'highlight.2'}>
                      {props.Description}
                  </Text>
              </Stack>
          </CardBody>
          <CardFooter>
              <Button variant={'ghost'}>Order a Delivery</Button>
          </CardFooter>
      </Card>
  )
}
