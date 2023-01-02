import React from 'react'
import {
    Container,
    Badge,
    Link, Code, Heading,
    List, Box,
    ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { CopyBlock, dracula, CodeBlock } from "react-code-blocks";

const RedditAvatar = () => {

    // TODO: Make component abit more cleaner
    return (
        <Layout title="Reddit Avatar Snippet">
            <Container>
                <Title>
                    Reddit Avatar<Badge>snippet-</Badge>
                </Title>
                <P>
                    The code showcases how to use the about.json parameter on the users reddit url to extract the user avatar.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Repo with code usage</Meta>
                        <Link href="https://github.com/Anslem27/Anslem.io">
                            https://github.com/Anslem27/Anslem.io <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web, DeskTop,Mobile</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Dart</span>
                    </ListItem>
                </List>
                <Heading>Dart Code</Heading>



            </Container>
            <Code colorScheme='red' children="Add the imports" />
            <CodeBlock
                text="
                    import 'dart:convert';
                    import 'package:flutter_portfolio/utils/constants.dart';
                    import 'package:http/http.dart' as http;
                    import '../models/reddit_model.dart';
    "
                language={"dart"}
                theme={dracula}
            />

            <Code padding={5} colorScheme='red' children="Use the function" />
            <Box ><CopyBlock
                text="
                Future<Data?> fetchRedditInfo() async {
                      var url = Uri.https(
                'www.reddit.com', 'user/${Constants.redditUserName}/about.json');
                final response = await http.get(url);

                if (response.statusCode == 200) {
                        // print(response.body);
                        return RedditModel.fromJson(json.decode(response.body)).data;
                      } else {
                        throw Exception('Failed to fetch repos');
                      }
                    }
                "
                language='dart'
                showLineNumbers='false'

                theme={dracula}
            /></Box>
        </Layout>
    )
}

export default RedditAvatar