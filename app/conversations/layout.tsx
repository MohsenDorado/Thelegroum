import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import ConversationList from "../components/conversation/ConversationList";
import Sidebar from "../components/sidebar/Sidebar";

export default async function ConversationsLayout({
  children
}: {
  children: React.ReactNode,
}) {
  const users = await getUsers();
    const conversations=await getConversations();
  return (

    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialItems={conversations}/>
       
        {children}
      </div>
    </Sidebar>
  );
}