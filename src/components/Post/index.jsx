import { format, formatDistanceToNow } from 'date-fns'
import { useState } from 'react'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './Post.module.css'

export function Post({ author, content, publisherAt }) {
  const [comments, setComments] = useState([
    'Post muito bacana s2'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publisherDateFormatted = format(publisherAt, "d 'de' LLLL 'às' HH:mm'h'")
  const publisherDateRelativeToNow = formatDistanceToNow(publisherAt, {
    addSuffix: true,
  })

  function handleCreateNewComment(e) {
    e.preventDefault()

    const newCommentText = e.target.comment.value

    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete)
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publisherDateFormatted} dateTime={publisherAt.toISOString()}>
          {publisherDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={index}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className={styles.commentForm}
      >
        <strong>Deixe seu FeedBack</strong>

        <textarea
          name="comment"
          value={newCommentText}
          onChange={(ev) => handleNewCommentChange(ev)}
          placeholder='Deixe um comentário'
          required
          onInvalid={(ev) => handleNewCommentInvalid(ev)}
        />
        <footer>
          <button
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return (
            <Comment
              key={index}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}