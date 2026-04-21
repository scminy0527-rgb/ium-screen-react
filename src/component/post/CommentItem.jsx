import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { colors, fonts, radius } from '../../styles/theme';

const reportIconImg = 'https://www.figma.com/api/mcp/asset/3823b07b-8dff-47fb-9bc5-b1dacb0103e8';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px 0;
  background: ${colors.bgCard};
  padding-left: ${({ isReply }) => (isReply ? '56px' : '0')};
`;

const LeftArea = styled.div`
  display: flex;
  gap: 19px;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${colors.bgSection};
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DefaultAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${colors.primaryLight};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fonts.size.lg};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-width: 0;
`;

const AuthorName = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${({ isAuthor }) => (isAuthor ? colors.primary : colors.textMain)};
  margin: 0;
`;

const CommentText = styled.div`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.md};
  color: ${colors.textMain};
  letter-spacing: -0.28px;
  line-height: 22px;

  p {
    margin: 0;
  }
`;

const ReactionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ReactionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  svg {
    font-size: ${fonts.size.sm};
    color: ${({ active }) => (active ? colors.primary : colors.textSub)};
  }

  span {
    font-family: ${fonts.family};
    font-weight: ${fonts.weight.regular};
    font-size: ${fonts.size.sm};
    color: ${colors.textMain};
    white-space: nowrap;
  }
`;

const AccessibilityRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const AccessBtn = styled.button`
  padding: 6px 16px;
  border-radius: ${radius.sm};
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  letter-spacing: -0.24px;
  cursor: pointer;
  white-space: nowrap;
  background: ${({ variant }) => (variant === 'blue' ? colors.primaryLight : colors.accessibilityReadBg)};
  color: ${({ variant }) => (variant === 'blue' ? colors.primary : colors.accessibilityRead)};
  border: 1px solid ${({ variant }) => (variant === 'blue' ? colors.primary : colors.accessibilityRead)};
`;

const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  align-self: stretch;
  flex-shrink: 0;
  width: 74px;
`;

const TimeText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  letter-spacing: -0.24px;
  margin: 0;
  text-align: right;
`;

const ReportButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${radius.button};
  background: ${colors.bgCard};
  border: 2px solid ${colors.danger};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  padding: 0;

  img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }
`;

const CommentItem = ({
  avatar = null,
  authorName = '사용자',
  isAuthor = false,
  isReply = false,
  text = '',
  lines = [],
  likes = 1,
  replies = 1,
  time = '방금 전',
  showAccessibility = true,
}) => {
  const displayLines = lines.length > 0 ? lines : text ? [text] : [];

  return (
    <Wrapper isReply={isReply}>
      <LeftArea>
        {avatar ? (
          <Avatar>
            <img src={avatar} alt={authorName} />
          </Avatar>
        ) : (
          <DefaultAvatar>👤</DefaultAvatar>
        )}
        <Body>
          <AuthorName isAuthor={isAuthor}>{authorName}</AuthorName>
          <CommentText>
            {displayLines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </CommentText>
          <ReactionsRow>
            <ReactionItem>
              <FontAwesomeIcon icon={faHeart} />
              <span>{likes}</span>
            </ReactionItem>
            <ReactionItem>
              <FontAwesomeIcon icon={faCommentDots} />
              <span>{replies}</span>
            </ReactionItem>
          </ReactionsRow>
          {showAccessibility && (
            <AccessibilityRow>
              <AccessBtn variant="blue">수어로 보기</AccessBtn>
              <AccessBtn variant="green">글 읽어주기</AccessBtn>
            </AccessibilityRow>
          )}
        </Body>
      </LeftArea>
      <RightArea>
        <TimeText>{time}</TimeText>
        <ReportButton aria-label="댓글 신고">
          <img src={reportIconImg} alt="신고" />
        </ReportButton>
      </RightArea>
    </Wrapper>
  );
};

export default CommentItem;
