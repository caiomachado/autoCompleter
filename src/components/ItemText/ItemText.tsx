import { HighlighttedText } from "./style";

type ItemTextProps = {
  repoName: string;
  query: string;
}

export const ItemText = ({ repoName, query }: ItemTextProps) => {
    const startIndex = repoName.indexOf(query);
    const highlightLength = query.length

    return startIndex === 0 ? (
      <>
        <HighlighttedText>{repoName.slice(0, highlightLength)}</HighlighttedText>
        {repoName.slice(startIndex + highlightLength, repoName.length + 1)}
      </>
    ) : (
      <>
        {repoName.slice(0, startIndex)}
        <HighlighttedText>{repoName.slice(startIndex, startIndex + highlightLength)}</HighlighttedText>
        {repoName.slice(startIndex + highlightLength, repoName.length + 1)}
      </>
    )
}