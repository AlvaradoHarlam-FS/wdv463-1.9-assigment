import Image from "next/image";
import api from '../../public/week4.jpg'

function Week4() {

  return     <div>
  <h1 className="week"> Building a product that requires passwords for user authentication means that you need to implement a method to verify your users’ passwords. However, storing plaintext passwords in your database comes with significant security risks. 

Holding this data opens your app up to risk if your database gets breached. Hackers — who can be rogue employees that have access to the database — benefit from these attacks because of the prevalence of users re-using the same password across different websites. Even if your application isn’t particularly security sensitive, attackers hope your users have used those passwords at higher value accounts like their bank accounts. Securely storing passwords is essential to mitigate these risks.

Password hashing is a strategy to ensure that passwords are stored securely. In this blog post, we’ll explain what hashing is, why it’s important, and how Stytch has implemented it to make our Passwords product as modern and secure as possible.

The basics of password hashing
Password hashing is the practice of algorithmically turning a password into ciphertext, or an irreversibly obfuscated version of itself, as a means of blocking against the threat of password breaches. Essentially, one string of characters in a password is transformed into a completely different string using a mathematical hashing function. Once a string (password) has been hashed, there’s no way to reverse the process and each time a user logs in, their hashed password is compared with a recorded hashed value. 

That might sound a bit technical, so let’s put hashing into human terms — say you have two users, Alice and Bob, who create an account on your website or platform. When they finish registering with a username/email and password, you store their passwords in a database. 

When you’re storing these passwords, the worst thing you could do is store them in plain text. Storing in plain text means you’re directly tying your user’s identity to their password in a readable format, as seen in the image below:</h1>
  <Image src={api}/>
 
  </div>
}
export default Week4