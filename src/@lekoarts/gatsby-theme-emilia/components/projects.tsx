/** @jsx jsx */
/* eslint no-shadow: 0 */
import { jsx, Container, Themed, Box } from "theme-ui"
import { useSpring, animated, config } from "react-spring"
import { rgba } from "polished"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Layout from "@lekoarts/gatsby-theme-emilia/src/components/layout"
import Header from "@lekoarts/gatsby-theme-emilia/src/components/header"
import Card from "@lekoarts/gatsby-theme-emilia/src/components/card"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

type Props = {
  projects: {
    slug: string
    title: string
    cover: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }[]
}

const Projects = ({ projects }: Props) => {
  const fadeUpProps = useSpring({
    config: config.slow,
    delay: 600,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })

  if (projects.length === 0) {
    return (
      <Layout>
        <Header />
        <Container>
          <Themed.p>
            Hi!{` `}
            <span role="img" aria-label="Wave emoji">
              👋
            </span>
            {` `}
            <br />
            Thanks for using <b>@lekoarts/gatsby-theme-emilia</b>. You currently don't have any content in your{` `}
            <i>projects</i> folder - that's why this page displays a placeholder text. Head over to the{` `}
            <Themed.a href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-emilia">
              README
            </Themed.a>
            {` `}
            to learn how to setup them.
          </Themed.p>
          <Themed.p>
            <b>TL;DR:</b> <br />
            The starter automatically created the folder <code>content/projects</code>. Go into this folder, create a
            new folder called <code>example</code> and create an <code>index.mdx</code> file there and place an image.
            Edit the frontmatter like described in the{` `}
            <Themed.a href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-emilia">
              README
            </Themed.a>
            .
          </Themed.p>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout>
      <Header />
      <Box as="main" variant="layout.main">
        <animated.div style={fadeUpProps}>
          <Container
            sx={{
              mt: `-8rem`,
              alignItems: `flex-start`,
            }}
          >
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
              <Masonry gutter="1rem">
              {projects.map((project, index) => {
                const val = project.cover.childImageSharp.gatsbyImageData.backgroundColor as string
                const shadow = rgba(val, 0.15)

                const px = [`64px`, `32px`, `16px`, `8px`, `4px`]
                const shadowArray = px.map((v) => `${shadow} 0px ${v} ${v} 0px`)

                return <Card key={project.slug} eager={index === 0} item={project} overlay={val} shadow={shadowArray} />
              })}
              </Masonry>
            </ResponsiveMasonry>
          </Container>
        </animated.div>
      </Box>
    </Layout>
  )
}

export default Projects