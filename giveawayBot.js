// Import required packages
const axios = require('axios');
const accessToken = '111624134852239:6bab0db259b54dd6d5d60fca0f12ad81'; // Replace with your ManyChat access token

// Define keyword trigger
const giveawayKeyword = 'PARTY';

// Function to handle DM event
const handleDMEvent = async (event) => {
  const { message, user_id } = event;

  if (message && message.toLowerCase().includes(giveawayKeyword.toLowerCase())) {
    try {
      // Send response message with image and text
      await axios.post(
        'https://api.manychat.com/fb/subscriber/sendContent',
        {
          subscriber_id: user_id,
          message_tag: 'CONFIRMED_EVENT_UPDATE',
          messages: [
            {
              text: "🔥 YOU'RE IN! 🔥 The Halloween Masquerade Party Giveaway is going to be EPIC! 🎭👻 Join us on October 31st at The Grand Venue! Get ready for an unforgettable night of music, fun, and spooky vibes! 🕷️💀",
            },
            {
              attachment: {
                type: 'image',
                payload: {
                  url: 'https://highernz.com/products/halloween-masquerade-ticket', // Replace with the URL of your giveaway image
                },
              },
            },
            {
              text: "🎶 Hosted by @MemoirsOfAMaori, with @DJJayrasik and @BenjaminFriday on the mic! 📣 Make sure you're following these profiles for more hype and updates: @Creator1, @Creator2, @Establishment, and @YourProfile. 📲\n\nGet your costume ready, it's gonna be LIT! 🔥🕸️ #HalloweenMasquerade #PartyTime #GiveawayEntry",
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(`Successfully sent a response to user ${user_id}`);
    } catch (error) {
      console.error(`Failed to send response to user ${user_id}:`, error);
    }
  }
};

// Function to handle Instagram DMs via ManyChat
const listenToDMs = () => {
  console.log("Listening for Instagram DMs via ManyChat...");
  // Assume ManyChat automatically calls handleDMEvent for each DM received
};

// Start listening to DMs
listenToDMs();
