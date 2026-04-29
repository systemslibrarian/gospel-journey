
import type { Scripture } from "../types";

export type JourneyStep = {
  step: number;
  title: string;
  mainIdea: string;
  scriptures: Scripture[];
  explanation: string;
  reflection: string;
  prayer: string;
};

export const gospelSteps: JourneyStep[] = [
  {
    step: 1,
    title: "God Created Us for Relationship",
    mainIdea: "You are not an accident. You were created by God and for God.",
    scriptures: [
      { id: "gen-1-27", reference: "Genesis 1:27", text: "So God created man in his own image, in the image of God created he him; male and female created he them.", theme: "Creation", plainMeaning: "God made us in His image for relationship with Him.", translation: 'KJV' },
      { id: "rev-4-11", reference: "Revelation 4:11", text: "Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are and were created.", theme: "Creation", plainMeaning: "We exist for God's purpose and pleasure.", translation: 'KJV' },
      { id: "john-3-16", reference: "John 3:16", text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.", theme: "God's Love", plainMeaning: "God loves us and offers eternal life through Jesus.", translation: 'KJV' }
    ],
    explanation: "God made you for Himself. You are deeply loved and created for relationship with Him.",
    reflection: "What does it mean to you that God created you for relationship with Him?",
    prayer: "Lord, thank You for creating me and loving me. Help me know You more."
  },
  {
    step: 2,
    title: "Sin Broke That Relationship",
    mainIdea: "Sin separates us from God, and we cannot fix that separation by being good enough.",
    scriptures: [
      { id: "rom-3-23", reference: "Romans 3:23", text: "For all have sinned, and come short of the glory of God;", theme: "Sin and need", plainMeaning: "Everyone has sinned and falls short of God's standard.", translation: 'KJV' },
      { id: "isa-59-2", reference: "Isaiah 59:2", text: "But your iniquities have separated between you and your God, and your sins have hid his face from you, that he will not hear.", theme: "Sin and need", plainMeaning: "Sin separates us from God.", translation: 'KJV' },
      { id: "rom-6-23", reference: "Romans 6:23", text: "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.", theme: "Sin and need", plainMeaning: "Sin brings death, but God offers eternal life in Christ.", translation: 'KJV' }
    ],
    explanation: "Sin is not just bad actions; it is turning away from God. We cannot fix this by our own efforts.",
    reflection: "How have you experienced the effects of sin and separation from God?",
    prayer: "Lord, I confess my sin and need for You. Forgive me and draw me near."
  },
  {
    step: 3,
    title: "God Promised a Savior",
    mainIdea: "Jesus was not Plan B. From the beginning, God promised rescue.",
    scriptures: [
      { id: "gen-3-15", reference: "Genesis 3:15", text: "And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel.", theme: "Promise of a Savior", plainMeaning: "God promised a Savior to defeat sin and evil.", translation: 'KJV' },
      { id: "isa-53-5-6", reference: "Isaiah 53:5–6", text: "But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed. All we like sheep have gone astray; we have turned every one to his own way; and the Lord hath laid on him the iniquity of us all.", theme: "Promise of a Savior", plainMeaning: "The Savior would suffer for our sins.", translation: 'KJV' },
      { id: "mic-5-2", reference: "Micah 5:2", text: "But thou, Bethlehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting.", theme: "Promise of a Savior", plainMeaning: "The Savior would be born in Bethlehem.", translation: 'KJV' },
      { id: "john-5-39", reference: "John 5:39", text: "Search the scriptures; for in them ye think ye have eternal life: and they are they which testify of me.", theme: "Promise of a Savior", plainMeaning: "All Scripture points to Jesus.", translation: 'KJV' }
    ],
    explanation: "God always planned to send Jesus. The whole Bible points to Him as the promised Savior.",
    reflection: "How does it encourage you to know God always planned rescue through Jesus?",
    prayer: "Thank You, Lord, for Your promise and plan to save through Jesus."
  },
  {
    step: 4,
    title: "Jesus Came",
    mainIdea: "Jesus is the promised Savior, fully God and fully man.",
    scriptures: [
      { id: "john-1-1", reference: "John 1:1", text: "In the beginning was the Word, and the Word was with God, and the Word was God.", theme: "Jesus' identity", plainMeaning: "Jesus is God, present from the beginning.", translation: 'KJV' },
      { id: "john-1-14", reference: "John 1:14", text: "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.", theme: "Jesus' identity", plainMeaning: "Jesus became human and lived among us.", translation: 'KJV' },
      { id: "matt-1-21", reference: "Matthew 1:21", text: "And she shall bring forth a son, and thou shalt call his name JESUS: for he shall save his people from their sins.", theme: "Jesus' identity", plainMeaning: "Jesus came to save us from our sins.", translation: 'KJV' },
      { id: "luke-19-10", reference: "Luke 19:10", text: "For the Son of man is come to seek and to save that which was lost.", theme: "Jesus' identity", plainMeaning: "Jesus came to seek and save the lost.", translation: 'KJV' },
      { id: "col-1-15-20", reference: "Colossians 1:15–20", text: "Who is the image of the invisible God, the firstborn of every creature: For by him were all things created... And, having made peace through the blood of his cross, by him to reconcile all things unto himself...", theme: "Jesus' identity", plainMeaning: "Jesus is the image of God and reconciles us to Him.", translation: 'KJV' }
    ],
    explanation: "Jesus is not just a teacher or prophet. He is God in the flesh, the promised Savior.",
    reflection: "What does it mean to you that Jesus is both God and man?",
    prayer: "Jesus, thank You for coming to seek and save me. Help me trust You."
  },
  {
    step: 5,
    title: "Jesus Died for Our Sins",
    mainIdea: "Jesus took the punishment we deserved so we could be forgiven.",
    scriptures: [
      { id: "rom-5-8", reference: "Romans 5:8", text: "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.", theme: "The cross", plainMeaning: "Jesus died for us while we were still sinners.", translation: 'KJV' },
      { id: "1cor-15-3", reference: "1 Corinthians 15:3", text: "For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures;", theme: "The cross", plainMeaning: "Christ died for our sins as Scripture foretold.", translation: 'KJV' },
      { id: "2cor-5-21", reference: "2 Corinthians 5:21", text: "For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.", theme: "The cross", plainMeaning: "Jesus took our sin so we could be made right with God.", translation: 'KJV' },
      { id: "1pet-2-24", reference: "1 Peter 2:24", text: "Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should live unto righteousness: by whose stripes ye were healed.", theme: "The cross", plainMeaning: "Jesus bore our sins so we could live for God.", translation: 'KJV' }
    ],
    explanation: "On the cross, Jesus took our place and paid the penalty for our sins. Forgiveness is found in Him alone.",
    reflection: "How does it affect you to know Jesus died for your sins personally?",
    prayer: "Thank You, Jesus, for dying for my sins. I trust in Your sacrifice for me."
  },
  {
    step: 6,
    title: "Jesus Rose Again",
    mainIdea: "Jesus is alive, and salvation is found in Him.",
    scriptures: [
      { id: "1cor-15-4", reference: "1 Corinthians 15:4", text: "And that he was buried, and that he rose again the third day according to the scriptures:", theme: "The resurrection", plainMeaning: "Jesus rose again, just as Scripture said.", translation: 'KJV' },
      { id: "rom-10-9", reference: "Romans 10:9", text: "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.", theme: "The resurrection", plainMeaning: "Believing in the risen Jesus brings salvation.", translation: 'KJV' },
      { id: "john-11-25-26", reference: "John 11:25–26", text: "Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live: And whosoever liveth and believeth in me shall never die. Believest thou this?", theme: "The resurrection", plainMeaning: "Jesus gives eternal life to all who believe.", translation: 'KJV' },
      { id: "1pet-1-3", reference: "1 Peter 1:3", text: "Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead,", theme: "The resurrection", plainMeaning: "We have living hope through Jesus' resurrection.", translation: 'KJV' }
    ],
    explanation: "Jesus conquered death. Because He lives, we can have new life and hope in Him.",
    reflection: "What hope does Jesus’ resurrection give you?",
    prayer: "Risen Lord, thank You for victory over death. Give me hope and faith in You."
  },
  {
    step: 7,
    title: "We Respond by Faith",
    mainIdea: "Salvation is received by grace through faith in Jesus Christ.",
    scriptures: [
      { id: "john-1-12", reference: "John 1:12", text: "But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name:", theme: "Faith", plainMeaning: "All who receive Jesus by faith become God's children.", translation: 'KJV' },
      { id: "rom-10-9-13", reference: "Romans 10:9–13", text: "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved... For whosoever shall call upon the name of the Lord shall be saved.", theme: "Faith", plainMeaning: "Anyone who calls on Jesus in faith will be saved.", translation: 'KJV' },
      { id: "eph-2-8-9", reference: "Ephesians 2:8–9", text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.", theme: "Faith", plainMeaning: "Salvation is a gift, not earned by works.", translation: 'KJV' },
      { id: "acts-16-31", reference: "Acts 16:31", text: "And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.", theme: "Faith", plainMeaning: "Believe in Jesus and you will be saved.", translation: 'KJV' }
    ],
    explanation: "We cannot earn salvation. It is a gift received by trusting in Jesus Christ alone.",
    reflection: "Have you personally trusted Jesus as your Savior?",
    prayer: "Lord Jesus, I trust You as my Savior. Thank You for saving me by grace through faith."
  }
];
