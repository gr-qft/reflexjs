import * as React from "react"
import {
  Section,
  Container,
  Grid,
  Flexbox,
  H1,
  P,
  Icon,
} from "@reflexjs/components"

export default function Component() {
  return (
    <Section py="8|12|16|24">
      <Container>
        <Grid col="1|2" gap="8|12|16" alignItems="center">
          <Image
            src="placeholder.jpg"
            colStart="null|2"
            w="full"
            rounded="lg"
            overflow="hidden"
          />
          <Flexbox
            flexDirection="column"
            alignItems="center|flex-start"
            textAlign="center|left"
          >
            <H1 m="0" fontWeight="extrabold" lineHeight="tight">
              Supercharge your site.
            </H1>
            <P fontSize="xl|2xl" mt="2">
              Build a blazing fast site with Gatsby and Reflex.
            </P>
            <ButtonLink href="#" variant="primary">
              Get Started
              <Icon name="arrow-right" ml="4" />
            </ButtonLink>
          </Flexbox>
        </Grid>
      </Container>
    </Section>
  )
}
