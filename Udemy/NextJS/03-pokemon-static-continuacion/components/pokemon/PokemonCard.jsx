// Next UI
import { Card, Grid, Row, Text } from "@nextui-org/react";

// Hook de Next
import { useRouter } from "next/router";

export const PokemonCard = ({id, name, image}) => {

    const router = useRouter()

    const onClickHandler = () => {
        router.push(`/pokemon/${id}`)
    }

  return (
    <Grid xs={6} sm={3} md={2} key={id}>
      <Card isHoverable variant="bordered" isPressable onClick={onClickHandler}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={image} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>Nº {String(id).padStart(3, 0)}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
