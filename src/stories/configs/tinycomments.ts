const user_id: string = 'james-wilson';
const collaborator_id: string = 'mia-andersson';

const conversationDb: Record<string, any> = {}


const tinycomments_create = (req: any, done: any, fail: any) => {
  if (req.content === 'fail') {
    fail(new Error('Something has gone wrong...'));
  } else {
    const uid = 'annotation-' + randomString();
    conversationDb[uid] = {
      uid,
      comments: [{
        uid,
        author: user_id,
        authorName: 'James Wilson',
        authorAvatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg',
        content: req.content,
        createdAt: req.createdAt,
        modifiedAt: req.createdAt
      }]
    };
    setTimeout(() => done({ conversationUid: uid }), fakeDelay);
  }
};

const fakeDelay = 200;

const randomString = () => {
  return crypto.getRandomValues(new Uint32Array(1))[0].toString(36).substring(2, 14);
};

const tinycomments_reply = (req: any, done: any) => {
  const replyUid = 'annotation-' + randomString();
  conversationDb[req.conversationUid].comments.push({
    uid: replyUid,
    author: user_id,
    authorName: 'James Wilson',
    authorAvatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg',
    content: req.content,
    createdAt: req.createdAt,
    modifiedAt: req.createdAt
  });
  setTimeout(() => done({ commentUid: replyUid }), fakeDelay);
};

const tinycomments_delete = (req: any, done: any) => {
  if (user_id === collaborator_id) { // Replace wth your own logic, e.g. check if user created the conversation
    delete conversationDb[req.conversationUid];
    setTimeout(() => done({ canDelete: true }), fakeDelay);
  } else {
    setTimeout(() => done({ canDelete: false, reason: 'Must be admin user' }), fakeDelay);
  }
};

const tinycomments_resolve = (req: any, done: any) => {
  const conversation = conversationDb[req.conversationUid];
  if (user_id === conversation.comments[0].author) { // Replace wth your own logic, e.g. check if user has admin priveleges
    delete conversationDb[req.conversationUid];
    setTimeout(() => done({ canResolve: true }), fakeDelay);
  } else {
    setTimeout(() => done({ canResolve: false, reason: 'Must be conversation author' }), fakeDelay);
  }
};

const tinycomments_delete_comment = (req: any, done: any) => {
  const oldcomments = conversationDb[req.conversationUid].comments;
  let reason = 'Comment not found';

  const newcomments = oldcomments.filter((comment: any) => {
    if (comment.uid === req.commentUid) { // Found the comment to delete
      if (user_id === comment.author) { // Replace with your own logic, e.g. check if user has admin privileges
        return false; // Remove the comment
      } else {
        reason = 'Not authorised to delete this comment'; // Update reason
      }
    }
    return true; // Keep the comment
  });

  if (newcomments.length === oldcomments.length) {
    setTimeout(() => done({ canDelete: false, reason }), fakeDelay);
  } else {
    conversationDb[req.conversationUid].comments = newcomments;
    setTimeout(() => done({ canDelete: true }), fakeDelay);
  }
};

const tinycomments_edit_comment = (req: any, done: any) => {
  const oldcomments = conversationDb[req.conversationUid].comments;
  let reason = 'Comment not found';
  let canEdit = false;

  const newcomments = oldcomments.map((comment: any) => {
    if (comment.uid === req.commentUid) { // Found the comment to delete
      if (user_id === comment.author) { // Replace with your own logic, e.g. check if user has admin privileges
        canEdit = true; // User can edit the comment
        return { ...comment, content: req.content, modifiedAt: new Date().toISOString() }; // Update the comment
      } else {
        reason = 'Not authorised to edit this comment'; // Update reason
      }
    }
    return comment; // Keep the comment
  });

  if (canEdit) {
    conversationDb[req.conversationUid].comments = newcomments;
    setTimeout(() => done({ canEdit }), fakeDelay);
  } else {
    setTimeout(() => done({ canEdit, reason }), fakeDelay);
  }
};

const tinycomments_delete_all = (req: any, done: any) => {
  const conversation = conversationDb[req.conversationUid];
  if (user_id === conversation.comments[0].author) { // Replace wth your own logic, e.g. check if user has admin priveleges
    delete conversationDb[req.conversationUid];
    setTimeout(() => done({ canDelete: true }), fakeDelay);
  } else {
    setTimeout(() => done({ canDelete: false, reason: 'Must be conversation author' }), fakeDelay);
  }
};

const tinycomments_lookup = (req: any, done: any) => {
  setTimeout(() => {
    done({
      conversation: {
        uid: conversationDb[req.conversationUid].uid,
        comments: [...conversationDb[req.conversationUid].comments]
      }
    });
  }, fakeDelay);
};

const tinycomments_fetch = (conversationUids: any[], done: any) => {
  const fetchedConversations: Record<string, any> = {};
  conversationUids.forEach((uid) => {
    const conversation = conversationDb[uid];
    if (conversation) {
      fetchedConversations[uid] = {...conversation};
    }
  });
  setTimeout(() => done({ conversations: fetchedConversations }), fakeDelay);
};

export default {
  toolbar: 'comments',
    name: 'tinycomments',
    config: {
      tinycomments_mode: 'callback',
      tinycomments_mentions_enabled: true,
      tinycomments_create,
      tinycomments_reply,
      tinycomments_delete,
      tinycomments_resolve,
      tinycomments_delete_all,
      tinycomments_lookup,
      tinycomments_delete_comment,
      tinycomments_edit_comment,
      tinycomments_fetch,
      // Fallback TinyMCE < 7.8
      tinycomments_author: user_id,
      tinycomments_author_name: 'James Wilson',
      tinycomments_avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg',
      // Fallback for tinymce >= 7.8
      tinycomments_fetch_author_info: (done: any) => {
        setTimeout(() => done({
          author: user_id,
          authorName: 'James Wilson',
          authorAvatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg',
        }), fakeDelay);
      },
    }
};