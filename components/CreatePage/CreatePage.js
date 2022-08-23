import { Box, Text } from 'degen'
import CreateMetadataButton from '@components/CreateMetadataButton'

const GIST_URL = 'https://gist.github.com/bretth18/df8358c840fa94946ec212f753e290dd'

const CreatePage = () => (
  <Box backgroundColor="black" display="flex" flexDirection="column" alignItems="center">
    <Box
      display="flex"
      padding="6"
      marginBottom="12"
      minWidth="full"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text>music nfts - Metadata Generator</Text>
      <Text>
        <a href={GIST_URL} target="__blank">
          source
        </a>
      </Text>
    </Box>
    <CreateMetadataButton />
  </Box>
)

export default CreatePage
