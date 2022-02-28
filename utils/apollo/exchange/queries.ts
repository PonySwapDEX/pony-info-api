import gql from "graphql-tag";

export const GLOBAL_DATA = gql`
  query uniswapFactories($blockNumber: Int!, $factoryAddress: ID!) {
    uniswapFactories(block: { number: $blockNumber }, where: { id: $factoryAddress }) {
      id
      totalVolumeUSD
      totalVolumeBNB
      untrackedVolumeUSD
      totalLiquidityUSD
      totalLiquidityBNB
      txCount
      pairCount
    }
  }
`;

export const CURRENT_GLOBAL_DATA = gql`
  query currentUniswapFactories($factoryAddress: ID!) {
    uniswapFactories(where: { id: $factoryAddress }) {
      id
      totalVolumeUSD
      totalVolumeBNB
      untrackedVolumeUSD
      totalLiquidityUSD
      totalLiquidityBNB
      txCount
      pairCount
    }
  }
`;
