const path = require('path');
const axios = require('axios');

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const result = await axios({
    method: 'GET',
    url: 'http://5b35ede16005b00014c5dc86.mockapi.io/list',
  });

  const events = result.data.data;

  // console.log('events ==>', events);
  events.forEach((event) => {
    const node = {
      ...event,
      // id: createNodeId(`easyProduct-${event.id}`),
      internal: {
        type: 'LIST_PRODUCTS',
        contentDigest: createContentDigest(event),
      },
    };
    actions.createNode(node);
  });
};

exports.createPages = ({ graphql, actions }) => {
  const viewTemplate = path.resolve('src/components/ProductViewing/view.jsx');
  const { createPage } = actions;

  return graphql(`
    query loadPagesQuery {
      allListProducts {
        nodes {
          id
          attributes {
            title
            price
            condition
            location
            seller_name
            seller_type
            phone
            description
            links {
              self
              image
            }
          }
        }
      }
    }    
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allListProducts.nodes.forEach((node) => {
      createPage({
        path: `/view/${node.id}`,
        matchPath: `/view/${node.id}`,
        component: viewTemplate,
        context: {
          // This time the entire product is passed down as context
          product: node,
        },
      });
    });
  });
};
