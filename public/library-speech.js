/* AI-assisted translation draft for the existing fictional teaching cases. No prediction of legal outcomes. */
(function () {
'use strict';
const storiesEn = {
  "t01-01": "You are asked to buy a six-month health supplement package when collecting free eggs.",
  "t01-02": "A seminar claims that ordinary food products can replace medical treatment.",
  "t01-03": "A salesperson says you must buy something immediately because you accepted a gift.",
  "t01-04": "After a health check, someone urges you to pay for a wellness service immediately.",
  "t01-05": "A shop assistant asks you to pay for health supplements into a personal account.",
  "t01-06": "The seller promises a refund but refuses to put the promise in writing.",
  "t01-07": "A product recommended by an acquaintance has no traceable manufacturer information.",
  "t01-08": "A supposedly free trial reveals expensive consumable charges only after it ends.",
  "t02-01": "A care facility promises long-term discounts if you pay a large bed reservation fee first.",
  "t02-02": "A facility demands a non-refundable membership fee before you move in.",
  "t02-03": "The room shown during your visit differs from the room described in the agreement.",
  "t02-04": "Staff only give a verbal promise about how often care will be provided.",
  "t02-05": "A service card can only be used with a different company.",
  "t02-06": "Previously undisclosed deductions appear when you request a refund.",
  "t02-07": "A family member receives an unfamiliar QR code requesting an additional payment.",
  "t02-08": "After changing its name, a care facility asks you to sign a blank agreement again.",
  "t03-01": "An investment chat group advertises large fixed monthly returns.",
  "t03-02": "A salesperson claims a project is government-backed but has no verifiable documents.",
  "t03-03": "An investment account can only be topped up through a privately sent link.",
  "t03-04": "You are asked to pay an additional unfreezing fee before withdrawing money.",
  "t03-05": "An acquaintance says you will earn an extra rebate by recruiting two people.",
  "t03-06": "A livestream presenter tells you to buy investments based on supposed inside information.",
  "t03-07": "Someone demands secrecy and says you must not consult your family.",
  "t03-08": "A project bundles care-home beds with promises of cash interest payments.",
  "t04-01": "A caller says your parcel is lost and asks you to open a compensation account first.",
  "t04-02": "A customer service agent demands phone screen sharing before processing a refund.",
  "t04-03": "Someone asks for your text message verification code to confirm your identity.",
  "t04-04": "A refund link asks you to enter your bank card password.",
  "t04-05": "A fake customer service agent says you must transfer money to cancel an accidental membership.",
  "t04-06": "Someone tells you to take out a loan before following their refund instructions.",
  "t04-07": "An agent claims a failed refund requires another verification payment.",
  "t04-08": "A stranger accurately describes your order and then urges you to transfer money.",
  "t05-01": "Your child contacts you from a new account, suddenly asking for urgent surgery money.",
  "t05-02": "A relative sends only voice messages asking for money and refuses a live call.",
  "t05-03": "A friend says their phone is broken and asks you to pay an unfamiliar order for them.",
  "t05-04": "Someone you recognize in a video asks you to transfer money to another person's account.",
  "t05-05": "An account using the same profile picture as someone you know asks to borrow money in a group.",
  "t05-06": "Someone says you must not call because it would interrupt their business.",
  "t05-07": "A family member's chat account asks you to buy top-up cards and send the codes.",
  "t05-08": "A relative or friend says a parcel can only be released after you pay a fee.",
  "t06-01": "A caller claims your account is involved in a case and demands a transfer to a safe account.",
  "t06-02": "Someone sends an electronic arrest warrant through a chat app.",
  "t06-03": "Someone insists that you stay alone and keep your camera on throughout the conversation.",
  "t06-04": "A supposed police officer asks you to install remote control software.",
  "t06-05": "Someone claims you must not verify their story with anybody else.",
  "t06-06": "Someone says a security deposit will erase a case record.",
  "t06-07": "A uniformed person on video asks you to read out a verification code.",
  "t06-08": "A stranger asks for photos of both sides of your bank card for an investigation.",
  "t07-01": "Your child appears in a video and asks you to transfer money to a new account immediately.",
  "t07-02": "A video of a leader's speech recommends an unfamiliar investment platform.",
  "t07-03": "A voice sounds like a relative but does not answer any identity-checking questions.",
  "t07-04": "A group receives a fabricated photo showing you at an event you never attended.",
  "t07-05": "Someone uses your voice to ask your relatives and friends for money.",
  "t07-06": "A health expert's video directs you to buy unidentified products.",
  "t07-07": "A video call lasts only a few seconds before the caller urges you to pay.",
  "t07-08": "An unfamiliar platform requires a family photo before you can claim a subsidy.",
  "t08-01": "A text message says your pension verification has expired and asks you to follow a link.",
  "t08-02": "A message warning that points will expire asks you to link a bank card.",
  "t08-03": "A parcel text message asks you to upload a photo of an identity document.",
  "t08-04": "You receive a login verification code that you never requested.",
  "t08-05": "An unfamiliar app asks to read your entire contact list.",
  "t08-06": "A notice says your phone service will stop unless you transfer money to an individual.",
  "t08-07": "Scanning a QR code in a community group opens a payment page.",
  "t08-08": "A downloaded cleaner app repeatedly demands unrelated permissions.",
  "t09-01": "A locksmith quotes a high price only after dismantling your door lock.",
  "t09-02": "An appliance repairer describes a minor fault as requiring the whole appliance to be scrapped.",
  "t09-03": "A cleaning service adds several compulsory charges after arriving at your home.",
  "t09-04": "A repair advertisement in the community misuses a brand's logo.",
  "t09-05": "A repairer asks you to scan a code and pay an unfamiliar individual.",
  "t09-06": "A repairer demands replacement of all parts before carrying out any inspection.",
  "t09-07": "A repairer takes away old parts but provides no list of replacements.",
  "t09-08": "You are verbally told that all repairs cost money, even during the warranty period.",
  "t10-01": "The caregiver assigned by a platform differs from the person described in the contract.",
  "t10-02": "A domestic worker unexpectedly asks for an additional overnight fee.",
  "t10-03": "A company verbally claims it accepts no responsibility for damaged belongings.",
  "t10-04": "An intermediary takes your payment without providing company information.",
  "t10-05": "The service hours are quietly reduced when you renew the agreement.",
  "t10-06": "Staff urge you to sign while fields in the agreement remain blank.",
  "t10-07": "A care handover has no list of medicines or personal belongings.",
  "t10-08": "Someone uses a personal chat account to collect a full year's service fee.",
  "t11-01": "The appliance delivered to you is a different model from the one you ordered.",
  "t11-02": "Food bought online has no manufacturer information on its packaging.",
  "t11-03": "A seller says you must withdraw your complaint before receiving a refund.",
  "t11-04": "The return address keeps changing in the chat conversation.",
  "t11-05": "A seller deducts the value of a free gift from your return payment.",
  "t11-06": "After-sales staff ask you to leave the platform and pay a separate repair fee.",
  "t11-07": "After accepting a parcel, you discover that its functions differ from the advertisement.",
  "t11-08": "The order says a refund was issued, but it is unclear where the money went.",
  "t12-01": "A livestream presenter says there is only one minute left to buy a product.",
  "t12-02": "A livestream calls an item pure gold, while the product page only says alloy.",
  "t12-03": "A presenter promises unconditional returns but provides no written explanation.",
  "t12-04": "A livestream describes an ordinary product as a medical treatment product.",
  "t12-05": "A private customer service message says payment outside the platform will be cheaper.",
  "t12-06": "The gift box delivered contains fewer items than shown in the livestream.",
  "t12-07": "An advertised identical product is shipped by a different business.",
  "t12-08": "A presenter asks viewers to pay a deposit before disclosing the total price.",
  "t13-01": "You receive a payment-on-delivery parcel even though you ordered nothing.",
  "t13-02": "An unfamiliar parcel contains a QR code claiming that you won a prize.",
  "t13-03": "A message says your address is incomplete and asks for a redelivery fee.",
  "t13-04": "A caller claiming to be a courier asks for a payment verification code.",
  "t13-05": "A parcel includes a card offering cashback for fake shopping orders.",
  "t13-06": "A supposed warehouse worker says your parcel is involved in a case and demands a deposit.",
  "t13-07": "A notice asks you to return supposedly overpaid compensation first.",
  "t13-08": "An unfamiliar link claims a delivery problem and asks for your identity document.",
  "t14-01": "A low-cost tour adds several compulsory charges after departure.",
  "t14-02": "A guide verbally promises no shopping stops, but the contract includes them.",
  "t14-03": "A supposedly subsidized tour requires an expensive membership payment first.",
  "t14-04": "The itinerary switches hotels without explaining the replacement standard.",
  "t14-05": "The recipient of your tour booking payment is an unidentified individual.",
  "t14-06": "You are asked to sign a blank confirmation form before the tour begins.",
  "t14-07": "Cancellation deductions differ from the original explanation.",
  "t14-08": "A stranger in a group offers to book tickets and asks for identity document photos.",
  "t15-01": "After viewing a property, you are urged to pay a deposit without seeing proof of rental authority.",
  "t15-02": "The conditions for returning a rental deposit are only discussed verbally.",
  "t15-03": "Existing property damage is neither photographed nor recorded at handover.",
  "t15-04": "A new landlord demands that you pay the same rent again.",
  "t15-05": "A renewal adds charges without providing a new agreement.",
  "t15-06": "An agent says you can sign the contract now and fill in the amount later.",
  "t15-07": "New cleaning deductions appear when you move out.",
  "t15-08": "A family member signs a lease for you without knowing the scope of their authorization.",
  "t16-01": "Water leaks from upstairs, but both sides give different accounts of its source.",
  "t16-02": "Objects left in a shared corridor obstruct passage for a long time.",
  "t16-03": "Parking charges differ from the posted notice.",
  "t16-04": "A neighbor's construction work repeatedly disturbs your rest.",
  "t16-05": "A shared facility is damaged, but nobody explains the repair arrangements.",
  "t16-06": "Property management asks residents to sign a blank statement of circumstances.",
  "t16-07": "Someone films in the corridor and publicly reveals your door number.",
  "t16-08": "Changes to a shared area begin without an explanation of the detailed plan.",
  "t17-01": "A relative asks you to sign a property document you do not understand.",
  "t17-02": "Someone keeps your important documents and then prevents you from viewing them.",
  "t17-03": "Family members say you only need to give a fingerprint and do not need to read the agreement.",
  "t17-04": "Housing arrangements rely on an old verbal promise.",
  "t17-05": "Someone drafts a document expressing your wishes but will not let you check it.",
  "t17-06": "Account details and amounts in a property inventory are inaccurate.",
  "t17-07": "A relative or friend asks you to sign an authorization form that will be completed later.",
  "t17-08": "Family members disagree about the purpose of a large expense.",
  "t18-01": "Family members have different understandings of the care schedule.",
  "t18-02": "An older person does not know who manages the monthly expenses.",
  "t18-03": "Family members have no handover record for medical expenses.",
  "t18-04": "A caregiver is replaced at short notice without anyone confirming the handover details.",
  "t18-05": "Someone asks an older person to give up access to their own accounts.",
  "t18-06": "A family member posts a recording of a dispute directly into a public group.",
  "t18-07": "Family members disagree about the scope of authorization for handling paperwork.",
  "t18-08": "Care expenses appear only as scattered transfers with no explanation of their purpose.",
  "t19-01": "After a temporary job ends, the intermediary says someone else must pay the wages.",
  "t19-02": "The piecework rate differs from what was stated during recruitment.",
  "t19-03": "A cash payment has no matching list of completed work.",
  "t19-04": "A work organizer asks you to sign a payment receipt before actually paying you.",
  "t19-05": "Unexplained fees are arbitrarily deducted from temporary work payments.",
  "t19-06": "You are told to change all recorded work hours to one standard duration.",
  "t19-07": "After a change of supervisor, the original pay agreement becomes unclear.",
  "t19-08": "The recruitment group closes and you cannot find the payment contact.",
  "t20-01": "An acquaintance borrows money with only a vague promise to repay it someday.",
  "t20-02": "A friend asks you to sign an unclear loan document as a witness.",
  "t20-03": "A transfer note does not reflect the originally agreed purpose.",
  "t20-04": "A borrower asks you to transfer the money to a different person.",
  "t20-05": "Someone proposes a new loan to repay an old one without listing the old balance.",
  "t20-06": "Someone says signing as a guarantor is just a formality.",
  "t20-07": "A relative asks you to take out a loan that you will not use yourself.",
  "t20-08": "After partial repayment, both sides disagree about the remaining balance.",
  "t21-01": "Someone in the village verbally claims a payment can change land arrangements.",
  "t21-02": "The area stated in an application differs from your own records.",
  "t21-03": "An unfamiliar intermediary promises to handle paperwork but gives no receipt.",
  "t21-04": "A notice asks you to sign a form whose attachments are missing.",
  "t21-05": "Family members remember an earlier land-use arrangement differently.",
  "t21-06": "A public notice contains an incorrect name and plot number.",
  "t21-07": "Someone demands that you leave original documents with an individual for a long time.",
  "t21-08": "Two inconsistent explanations appear about the same matter.",
  "t22-01": "Agricultural supplies arrive in packaging different from what the salesperson displayed.",
  "t22-02": "A seller only gives a verbal guarantee that a product suits every crop.",
  "t22-03": "The shipping date changes repeatedly after you pay in advance.",
  "t22-04": "A delivered agricultural product has no clear label information.",
  "t22-05": "A promoter asks you to pay a security deposit into a personal account.",
  "t22-06": "The delivery quantity is short, but the seller asks you to confirm full receipt first.",
  "t22-07": "Return and exchange conditions are not written into the order.",
  "t22-08": "Written product instructions contradict the seller's verbal recommendation.",
  "t23-01": "A stranger says they need your bank card password to help you collect a subsidy.",
  "t23-02": "The recipient displayed after scanning a payment code differs from the person you know.",
  "t23-03": "A supposed bank caller asks you to download a remote control program.",
  "t23-04": "A relative helping with your phone enables password-free payments that you do not understand.",
  "t23-05": "After a mistaken transfer, someone offers to recover the money for an advance fee.",
  "t23-06": "You sell an old phone without signing out of its payment accounts.",
  "t23-07": "The amount on a transfer screen differs from the amount discussed verbally.",
  "t23-08": "An unfamiliar mini app asks you to upload a complete photo of your bank card.",
  "t24-01": "After clicking a trial offer, you discover automatic monthly charges.",
  "t24-02": "A livestream presenter privately promises a meeting if you send paid gifts.",
  "t24-03": "A pop-up repeatedly prompts you to buy unidentified gift packages.",
  "t24-04": "A family member discovers several unfamiliar charges on an account.",
  "t24-05": "An assistant to a presenter asks for further transfers outside the platform.",
  "t24-06": "The subscription cancellation page differs from the advertised instructions.",
  "t24-07": "A free teaching group later turns into an expensive long-term course.",
  "t24-08": "After selling a service, someone asks you to delete the original payment records.",
  "t25-01": "A business uses your activity photo in a health supplement advertisement.",
  "t25-02": "Community registration asks for information unrelated to the matter being handled.",
  "t25-03": "A gift-for-photo activity does not explain how the photo will be used.",
  "t25-04": "A relative shares a photo of your identity document in a large group.",
  "t25-05": "An unfamiliar app asks for ongoing access to your entire photo library.",
  "t25-06": "Someone adds your name and home address to a controversial video.",
  "t25-07": "A service worker uses a personal phone to photograph your complete medical records.",
  "t25-08": "The face in a short video is replaced with a likeness of your face.",
  "t26-01": "A high-paying part-time job requires an introduction fee in advance.",
  "t26-02": "After passing an interview, you are told to buy a specified uniform.",
  "t26-03": "A recruiter only operates in a chat group and refuses to identify the company.",
  "t26-04": "An advertised clerical job turns into promoting card applications when you arrive.",
  "t26-05": "A recruiter asks you to pay an equipment deposit first.",
  "t26-06": "After one day of work, you are told you must buy a membership first.",
  "t26-07": "A campus agent says you must recruit people into a group to receive your wages.",
  "t26-08": "An applicant is told to take out a loan to pay training fees first.",
  "t27-01": "After small payouts for liking posts, a task asks you to place expensive fake orders.",
  "t27-02": "A group administrator says you cannot withdraw until a combined set of orders is finished.",
  "t27-03": "A fake-order account shows a negative balance and asks you to pay more.",
  "t27-04": "An assistant says an operating error requires a repair fee.",
  "t27-05": "A task platform asks for your bank card verification code.",
  "t27-06": "A commission can only be collected through an unfamiliar top-up website.",
  "t27-07": "Someone claims to have advanced money for you and demands repayment.",
  "t27-08": "Other people in the group display earnings and urge you to put in more money.",
  "t28-01": "An interview turns into a requirement to enroll in an expensive skills course first.",
  "t28-02": "Staff operate your phone to apply for installment payments.",
  "t28-03": "The contract describes training services, while the advertisement promises direct employment.",
  "t28-04": "Someone promises you will not need to repay a loan if you cannot find a job.",
  "t28-05": "When you cancel a course, you are told loan charges will continue.",
  "t28-06": "Only the monthly installment is shown at signing, with no total cost.",
  "t28-07": "Three agreements contain three different company names.",
  "t28-08": "An admissions worker tells you to hide your student status when applying for a loan.",
  "t29-01": "A caller claiming to be a student aid center asks for a certification payment first.",
  "t29-02": "A text says a grant has arrived and asks you to open a link and enter a password.",
  "t29-03": "An unfamiliar group announces a time-limited hardship subsidy.",
  "t29-04": "A caller asks you to share your screen to verify your student registration.",
  "t29-05": "Someone asks you to transfer scholarship money back to a personal account.",
  "t29-06": "A fake teacher asks parents to scan a code to pay a student aid handling fee.",
  "t29-07": "A grant notice asks you to upload an entire household registration record.",
  "t29-08": "Someone says checking with your counselor will invalidate your place.",
  "t30-01": "A ticket reseller says you must transfer a deposit before seeing the ticket.",
  "t30-02": "An electronic ticket screenshot is presented as the only guarantee of entry.",
  "t30-03": "Just before a performance, a seller demands another name-change fee.",
  "t30-04": "A ticket-booking service only verbally guarantees that it will secure tickets.",
  "t30-05": "An unfamiliar link asks for your payment password to validate a ticket.",
  "t30-06": "Ticket transfer rules differ from what the seller told you.",
  "t30-07": "After a performance is canceled, someone charges a fee to arrange a refund.",
  "t30-08": "A seller of supposed insider tickets tells you not to verify with the official organizer.",
  "t31-01": "A seller says it will be cheaper if you pay outside the platform.",
  "t31-02": "A second-hand phone arrives in a different model from the description.",
  "t31-03": "A seller urges you to confirm receipt before inspecting the goods.",
  "t31-04": "A supposed customer service agent demands a deposit to unfreeze a transaction.",
  "t31-05": "At an in-person exchange, the other party changes the payment account.",
  "t31-06": "A product defect is mentioned only vaguely in chat.",
  "t31-07": "A seller asks you to advance an unexplained shipping insurance payment.",
  "t31-08": "A person handling a refund asks for an additional recovery fee.",
  "t32-01": "After buying a game account, the seller demands another fee to change its linked details.",
  "t32-02": "A cheap game top-up service asks for your full payment account details.",
  "t32-03": "A stranger says you must scan a login code to receive a free game skin.",
  "t32-04": "A trading platform demands a verification payment before withdrawal.",
  "t32-05": "A game-leveling service asks you to turn off every security protection.",
  "t32-06": "A supposed agent says your account is involved in a case and needs a transfer to unlock it.",
  "t32-07": "Buying game equipment requires you to install an unfamiliar plugin.",
  "t32-08": "Someone uses a payment screenshot to urge you to hand over your account first.",
  "t33-01": "You are asked for a non-refundable room reservation fee before viewing the property.",
  "t33-02": "The payment recipient in the contract is not the person offering the property.",
  "t33-03": "A prospective roommate says they can sign other people's names for them.",
  "t33-04": "The electricity rate is disclosed only after you move in.",
  "t33-05": "Your deposit is withheld at move-out without a detailed deduction list.",
  "t33-06": "The room's actual partitions differ from the viewing photos.",
  "t33-07": "An agent takes away the contract and provides no complete copy.",
  "t33-08": "A renewal price changes at short notice through verbal notice only.",
  "t34-01": "After a roommate damages a borrowed computer, both sides give different accounts.",
  "t34-02": "A parcel collected for someone else goes missing with no handover record.",
  "t34-03": "Nobody has clarified who pays for shared electrical appliances.",
  "t34-04": "Someone turns a roommate's photo into a meme without consent.",
  "t34-05": "Dormitory entrance surveillance footage is posted in a group.",
  "t34-06": "An unfamiliar senior student visits and demands that you buy an essential package.",
  "t34-07": "Belongings are mistaken for abandoned items during a dormitory move.",
  "t34-08": "At graduation, roommates disagree about dividing jointly purchased belongings.",
  "t35-01": "Takeaway packaging arrives damaged and the cause is unclear.",
  "t35-02": "The ordering page does not clearly disclose additional fees.",
  "t35-03": "A meal's main ingredients clearly differ from the listed ingredients.",
  "t35-04": "A restaurant asks you to withdraw a platform complaint before discussing the issue.",
  "t35-05": "An unknown service fee is added to a group meal package at checkout.",
  "t35-06": "The refund conditions for a table reservation deposit are unclear.",
  "t35-07": "A prepaid dining card stops working after the business changes locations.",
  "t35-08": "After you notice a suspected foreign object, staff ask you to throw the food away first.",
  "t36-01": "A parcel collection message demands payment on an unfamiliar website.",
  "t36-02": "You receive a cash-on-delivery parcel that you never bought.",
  "t36-03": "A parcel compensation agent asks to share your phone screen.",
  "t36-04": "A parcel contains a QR code advertising cashback for fake orders.",
  "t36-05": "After you collect a parcel for someone else, someone claims you must cover all losses.",
  "t36-06": "A delivery problem notice asks for your bank card verification code.",
  "t36-07": "A return parcel is redirected to a temporary personal address.",
  "t36-08": "Someone claims to have over-refunded shipping fees and demands an immediate personal transfer.",
  "t37-01": "An internship advertised as technical work turns into sales.",
  "t37-02": "You are told to sign an agreement before finishing reading it.",
  "t37-03": "An internship provider unexpectedly demands a management fee.",
  "t37-04": "Attendance records differ from the time you actually arrived for work.",
  "t37-05": "An organization asks an intern to sign another person's work documents.",
  "t37-06": "Accommodation and travel expenses are announced only after the internship starts.",
  "t37-07": "At the end of an internship, the organization refuses to explain how pay will be settled.",
  "t37-08": "A third-party intermediary asks you to conceal the actual internship location.",
  "t38-01": "The salary in an offer letter differs from the amount in the contract.",
  "t38-02": "A company asks you to sign a resignation document with the date left blank.",
  "t38-03": "Your original identity document is retained when you start work.",
  "t38-04": "You still have not been given your copy of the employment contract.",
  "t38-05": "The probation arrangements differ from the recruitment explanation.",
  "t38-06": "Your work location is changed to a city that was never mentioned.",
  "t38-07": "Staff say you do not need to read the non-compete clause.",
  "t38-08": "The contracting company differs from the company that actually assigns your work.",
  "t39-01": "After a part-time job ends, the other party denies the agreed hourly rate.",
  "t39-02": "A payslip contains unexplained deductions.",
  "t39-03": "A supervisor asks you to confirm full settlement before making payment.",
  "t39-04": "The commission calculation differs from the recruitment advertisement.",
  "t39-05": "Your work hours suddenly disappear from the scheduling app.",
  "t39-06": "A cash wage receipt does not identify the month it covers.",
  "t39-07": "After leaving a job, you cannot find the payment contact.",
  "t39-08": "An employer asks to replace unpaid wages with goods.",
  "t40-01": "A classmate promises to repay a loan at month-end but leaves no written record.",
  "t40-02": "After jointly running a stall, both partners give different accounts of the costs.",
  "t40-03": "You advance money for an activity but keep no bills.",
  "t40-04": "A friend asks you to take out an online loan for somebody else's spending.",
  "t40-05": "A borrower asks you to transfer money to an account you do not recognize.",
  "t40-06": "The remaining balance is not confirmed after a partial repayment.",
  "t40-07": "One person takes a jointly purchased item and then cannot be contacted.",
  "t40-08": "Someone says signing as a guarantor carries no responsibility.",
  "t41-01": "A part-time job offers payment for renting out your bank card.",
  "t41-02": "A friend wants to route a payment through your payment account.",
  "t41-03": "A supposed wage settlement requires you to give up your bank card password.",
  "t41-04": "A stranger offers a commission if you withdraw cash for them.",
  "t41-05": "A gaming group recruits people to receive payments on behalf of others.",
  "t41-06": "Someone asks you to register several accounts using your own verified identity.",
  "t41-07": "A payment collection task requires you to delete all chats.",
  "t41-08": "Someone asks you to confirm an unclear transaction purpose on their behalf.",
  "t42-01": "A part-time job application asks for medical records unrelated to the role.",
  "t42-02": "Trial software forces access to your whole contact list.",
  "t42-03": "Collecting a resource pack requires photos of both sides of your identity document.",
  "t42-04": "A face recognition page does not explain why your face data will be used.",
  "t42-05": "A form in a campus group publicly exposes every student's phone number.",
  "t42-06": "A second-hand transaction requires a video of you holding an identity document.",
  "t42-07": "A prize draw link collects your detailed home address.",
  "t42-08": "After uninstalling an app, you discover your account information is still publicly displayed.",
  "t43-01": "A roommate appears in a video call asking for an urgent money transfer.",
  "t43-02": "Someone uses a synthetic teacher's voice to demand payment.",
  "t43-03": "Your photo is used in a misleading fabricated video.",
  "t43-04": "An unfamiliar account sends fabricated chat records and demands money.",
  "t43-05": "Someone posts words in a group that appear to have been spoken by you.",
  "t43-06": "A virtual livestream presenter uses an expert's likeness to recommend investments.",
  "t43-07": "A friend suddenly changes accounts and refuses confirmation through their original number.",
  "t43-08": "An unfamiliar platform offers rewards for uploading videos of your face from several angles.",
  "t44-01": "A classmate posts an unverified rumor in a public group.",
  "t44-02": "After an argument, someone publicly shares another person's address and phone number.",
  "t44-03": "An edited video leaves out essential context.",
  "t44-04": "An anonymous account uses your name to publish statements.",
  "t44-05": "A chat screenshot selects only the parts that make one side look bad.",
  "t44-06": "Someone calls for collective harassment in a comment section.",
  "t44-07": "A group administrator asks members to share an unverified accusation.",
  "t44-08": "Your explanation is edited again to convey the opposite meaning.",
  "t45-01": "A competition poster directly uses a commercial image from an unknown source.",
  "t45-02": "A free asset download page does not explain the scope of its license.",
  "t45-03": "A club uploads music in its video simply because the track was found online.",
  "t45-04": "One member claims sole authorship of a collaborative work.",
  "t45-05": "An image from a teacher's slides is used in commercial advertising.",
  "t45-06": "A commissioned design has no agreed terms for source files or permitted uses.",
  "t45-07": "An AI-generated work is questioned for being too close to its reference image.",
  "t45-08": "An online template is renamed and submitted as wholly original work.",
  "t46-01": "A team member leaves, but the work's author credits are not reconfirmed.",
  "t46-02": "One person keeps the competition materials and others cannot access them.",
  "t46-03": "A team uses external photos but keeps no permission records.",
  "t46-04": "A member changes the final submission file without authorization.",
  "t46-05": "The distribution of prize money differs from the original agreement.",
  "t46-06": "A work is entered into several competitions without checking the rules.",
  "t46-07": "Outsourced work is described as independently completed by a team member.",
  "t46-08": "Members' identity documents collected for registration remain in a public link for a long time.",
  "t47-01": "A fee-collection account in a class group uses the same profile picture as a teacher.",
  "t47-02": "A text message asks you to pay additional tuition into a personal account.",
  "t47-03": "A club asks new recruits for an unexplained security deposit.",
  "t47-04": "A campus card loss-report page asks for your bank card password.",
  "t47-05": "A fake notice threatens to cancel your student registration unless you pay that day.",
  "t47-06": "A competition registration QR code differs from the organizer's official website entry.",
  "t47-07": "A supposed certificate service group requires you to buy a specified package.",
  "t47-08": "An unfamiliar caller offers to change course grades for a fee.",
  "t48-01": "A holiday rental asks for an extra cleaning deposit before check-in.",
  "t48-02": "A tour changes its main sightseeing activities just before departure.",
  "t48-03": "A flight booking agent takes payment but keeps failing to issue a ticket.",
  "t48-04": "A hotel's website photos differ significantly from the actual room.",
  "t48-05": "A carpool group raises the fare at short notice and demands cash.",
  "t48-06": "Explanations of cancellation deductions change over time.",
  "t48-07": "An outdoor activity organizer gives no clear meeting point or contact arrangements.",
  "t48-08": "A cheap travel package actually requires participation in shopping activities.",
  "t49-01": "The purpose of a large transfer during a relationship is left unclear.",
  "t49-02": "A couple renting together does not agree who will receive the returned deposit.",
  "t49-03": "After a breakup, both sides interpret gifts and loans differently.",
  "t49-04": "One partner asks the other to take out a loan they cannot afford.",
  "t49-05": "A jointly purchased device is paid for by one person but kept by the other.",
  "t49-06": "Someone threatens to expose intimate photos unless you keep transferring money.",
  "t49-07": "After one person advances travel costs, both sides disagree on how to split them.",
  "t49-08": "A partner asks you to delete earlier chats about loans and money transfers.",
  "t50-01": "An admissions salesperson verbally guarantees that you will pass an exam.",
  "t50-02": "After driving school enrollment, previously undisclosed materials fees are charged.",
  "t50-03": "An exam preparation course asks for payment into a personal account.",
  "t50-04": "The number of scheduled teaching hours differs from the advertisement.",
  "t50-05": "When canceling a course, you are told that free materials will be deducted at a high price.",
  "t50-06": "An organization presents an ordinary training course as official certification.",
  "t50-07": "Installment enrollment shows only the monthly payment and not the total cost.",
  "t50-08": "Only after enrollment do you discover that the teaching provider and contracting business differ."
};
const themeRows = `
Free gifts and health products|Check the seller, product information, and actual charges. Do not decide to buy just because a gift is offered.|Event advertisements, product packaging, orders, and payment records.|The seller's official customer service, consumer complaint channels, or a qualified professional.
Prepaid elder care services|Check the care provider, service details, advance payments, and refund conditions separately.|Service contracts, itemized charges, receipts, and promotional materials.|The facility's official office, the relevant authority, or a qualified professional.
Investments and high-return promises|Independently check the provider's credentials, product details, and destination of funds. Do not rush a transfer because of promised returns.|Promotional materials, account details, chats, and transfer records.|Official channels of legitimate financial institutions; contact the police if fraud is suspected.
Fake customer service refunds|Find the official customer service channel yourself and verify the order and refund process there.|The original order, incoming call details, chats, and payment records.|Official platform support or the payment provider; contact the police if fraud is suspected.
Checking loan requests from family and friends|Use an existing saved contact or another trusted method to confirm the person's identity and the purpose independently.|Account changes, loan requests, the verification process, and payment records.|Trusted relatives or friends who can help verify the request; contact the police if fraud is suspected.
Calls impersonating justice authorities|Stop transfers and screen sharing. Find the relevant authority's official contact details independently to verify the caller.|Incoming numbers, documents sent by the caller, and financial records.|Official police channels or a trusted person nearby.
Verifying AI videos and voices|Treat a familiar voice or face as information that still needs checking. Confirm through an independent channel.|Where the video came from, account details, original conversations, and transfer records.|The person's original contact details, trusted family members, or the police.
Text message links and account security|Verify notices through an official app or a website you find yourself. Do not submit sensitive details through unfamiliar links.|Notice screenshots, web addresses, unusual account activity, and operation records.|Your mobile operator, official platform support, or the police.
Home repairs and charges|Confirm the service provider, the fault to be repaired, and the quote before accepting repairs.|Booking records, quotes, repair lists, and receipts.|Official service provider support, consumer complaint channels, or a qualified professional.
Housekeeping and care agreements|Write down who will provide the service, the scope of work, charges, and arrangements for unexpected changes.|Service agreements, schedules, payment records, and communications.|The housekeeping company's official office, consumer complaint channels, or a qualified professional.
Online orders and after-sales service|Check the goods, the seller, and platform after-sales rules. Keep the original transaction process and records.|Product pages, orders, unpacking records, and after-sales communications.|Official seller or platform after-sales support and consumer complaint channels.
Livestream shopping claims|Compare the presenter's claims with the product page, business information, and order terms.|Livestream clips, product pages, checkout pages, and payment records.|Official platform channels, consumer complaint channels, or a qualified professional.
Parcel and delivery information|Check your real orders and the courier's official tracking status first. Do not pay extra because of an unfamiliar private message.|Waybills, tracking pages, unfamiliar notices, and payment records.|Official support from the courier company or shopping platform.
Tour groups and travel purchases|Confirm the business, complete itinerary, total charges, and conditions for changes.|Itineraries, contracts, fee explanations, and promotional materials.|Official travel agency support or relevant tourism and consumer complaint channels.
Housing rentals and deposits|Check the authority to rent out the property, its condition, the deposit's purpose, and the written terms.|Rental documents, property handover lists, payment records, and communications.|The landlord, relevant local service offices, or a qualified professional.
Neighbors and shared spaces|Separate observed facts, existing agreements, and each side's requests. Record the situation before discussing it.|Site photos, property management notices, communications, and dated records.|Property management, community coordination channels, or a qualified professional.
Family property and important documents|Understand the document, the people involved, and your own wishes. Seek an independent professional explanation when needed.|Existing contracts, ownership documents, family agreements, and communications.|A professional you trust or official public legal service channels.
Family care and support discussions|List care needs, existing agreements, and each person's capacity. Do not decide responsibility from a single statement.|Care plans, actual expenses, communications, and existing agreements.|Family discussion, community mediation, or official professional service channels.
Work pay and records|Identify who actually arranged the work, the tasks, the pay agreement, and the settlement status.|Recruitment information, attendance records, settlement statements, and payment records.|The work provider, local employment service offices, or a qualified professional.
Personal loans and guarantees|Distinguish a loan, gift, payment on another person's behalf, or guarantee. Understand the amount, the people involved, and what you would undertake.|Transfer purposes, loan agreements, chats, and repayment records.|Discussion between the parties or official professional service channels.
Land matters and village documents|Check the nature of the matter, the responsible office, existing documents, and official public information. Do not infer ownership from verbal promises.|Existing certificates, public notices, application documents, and communications.|Official village or community offices, relevant authorities, or a qualified professional.
Buying agricultural supplies|Check the seller, product labels, usage instructions, and complete transaction terms.|Product packaging, batch information, purchase records, and communications.|The seller or relevant agricultural and consumer service offices.
Digital payments and bank cards|Confirm the recipient, payment purpose, and scope of authorization. Do not give anyone passwords or verification codes.|Payment screens, transaction details, unusual activity notices, and operation records.|Official bank or payment platform channels.
Livestream gifts and paid subscriptions|Understand the payment method, billing cycle, and platform rules. Distinguish paid gifts from buying a service.|Payment pages, bills, advertisements, and communications.|Official platform support, consumer complaint channels, or a qualified professional.
Photo permission and public information|Check who collects the information, why it is used, where it will be published, and whether the person has consented.|Permission pages, publication locations, original photos, and communications.|The publishing platform, the organization's official office, or a qualified professional.
Part-time recruitment and advance fees|Verify the recruiter, the real position, work duties, and proposed charges. Do not pay just because places are said to be limited.|Recruitment advertisements, job communications, fee explanations, and payment records.|School careers services, the recruitment platform, or a qualified professional.
Fake orders and commission tasks|Stop advancing money. Check the nature of the task through legitimate channels and be cautious about commission promises and demands for more payments.|Task pages, group chats, account details, and transfer records.|Official platform channels; contact the police if fraud is suspected.
Recruitment that becomes training and course loans|Check the job, training, and loan providers and terms separately. A promise of employment does not guarantee that a loan will be repaid.|Recruitment information, training agreements, loan pages, and itemized charges.|School careers services, the organization's official office, or a qualified professional.
Scholarships and student aid notices|Verify through official school notices and existing contact details. Do not send verification codes or money to an unfamiliar individual.|The notice's source, chats, links, and application documents.|The school's student aid department or your counselor's official channel.
Performance tickets and transactions|Check the ticket provider, entry rules, total price, and refund conditions. Keep the official transaction route whenever possible.|Ticket pages, chats, orders, and payment records.|Official ticket platform support and consumer complaint channels.
Second-hand goods and off-platform payments|Check the item's condition, the other party, and the payment process. Do not rush to an unfamiliar link because of a low price.|Product pages, inspection records, chats, and transaction records.|Official trading platform channels and consumer complaint channels.
Game transactions and account security|Check platform rules, the other party, and the scope of account access. Do not disclose passwords or verification codes.|Trading advertisements, account details, chats, and payment records.|Official game platform support; contact the police if fraud is suspected.
Off-campus rentals and contracts|Confirm rental authority, living conditions, all charges, and the written agreement.|Property information, leases, handover photos, and payment records.|The landlord, relevant local service offices, or a qualified professional.
Dormitory life and shared belongings|Clarify the facts, ownership, usage agreements, and everyone's requests. Avoid escalating the conflict.|Item inventories, borrowing agreements, site records, and communications.|Dormitory management, your counselor's coordination, or a qualified professional.
Takeaway food and restaurant purchases|Check the restaurant, the product, and what actually happened. If you feel unwell, address health needs first and preserve relevant records.|Orders, packaging, the condition of the goods, and after-sales records.|Official restaurant or platform support and relevant service channels.
Parcel collection and unusual notices|Verify your real order and official delivery status. Do not pay extra or provide passwords because of an unfamiliar notice.|Waybills, tracking details, notices, and handover records.|Official courier or shopping platform support.
Internship arrangements and changing roles|Check the internship provider, actual duties, working hours, pay, and school arrangements.|Internship notices, agreements, attendance records, and communications.|The school's internship office, the organization's official office, or a qualified professional.
Job agreements and work arrangements|Identify the contracting business, duties, pay, and important restrictions. Read the document before signing.|Offer letters, agreement copies, workplace rules, and communications.|The employer's official office, school careers services, or a qualified professional.
Wage settlement and work records|Organize the work actually done, agreed pay, payments already received, and disputed items.|Work hours, task records, payslips, and payment records.|The work provider, local employment service offices, or a qualified professional.
Loans between students and joint contributions|Distinguish a loan, gift, joint purchase, or investment contribution. Write down the amount, purpose, and later arrangements.|Transfer notes, agreements, itemized spending, and communications.|Discussion between the parties, school coordination, or a qualified professional.
Lending bank cards and payment collection jobs|Understand the purpose of funds and account access first. Do not let strangers operate your bank card or payment account.|Recruitment information, unusual account activity, chats, and transfer details.|Official bank or payment platform channels; contact the police if fraud is suspected.
Personal information and face permissions|Check who collects the data, the purpose, the necessary scope, and how it will be stored and used.|Permission pages, app permissions, information submitted, and communications.|Official platform or school channels, relevant organizations, or a qualified professional.
AI face swaps and social impersonation|Treat voices and images as information that still needs checking. Confirm the person's identity through an independent channel.|Original content, account details, publication locations, and communications.|The person's original contact details, platform reporting, or professional service channels.
Online expression and group conflicts|Separate verifiable facts from guesses. Avoid publicly spreading another person's private information or escalating conflict.|Original posts, dates, full context, and records of how the matter was handled.|Official platform reporting, school coordination, or a qualified professional.
Using images, music, and creative work|Check the source, permission scope, and credit requirements. Being able to download a work does not mean it can be used freely.|Original work, license statements, source links, and communications.|The rights holder, official platform channels, or a qualified professional.
Competition teams and ownership agreements|Agree in advance on roles, costs, author credits, submission access, and arrangements when a member leaves.|Version history, role allocations, costs, and permission discussions.|Team discussion, official competition channels, or a qualified professional.
Campus payments and notice verification|Use official school channels to verify the matter, the recipient organization, and the payment entry point.|Original notices, verification records, payment pages, and receipts.|Your counselor, the school finance office, or the relevant official office.
Travel bookings and itinerary changes|Check the booking provider, itinerary charges, and conditions for changes and refunds.|Booking pages, itineraries, payment records, and communications.|Official platform or business support and relevant complaint channels.
Relationship transfers and shared expenses|Distinguish gifts, loans, payments for another person, and joint purchases. Preserve each person's actual statements.|Transfer notes, shared expenses, chats, and existing agreements.|Discussion between the parties, trusted support, or official professional service channels.
Driving courses and qualification training|Check the training provider, service scope, all charges, and refund conditions. Be cautious about guaranteed-pass promises.|Enrollment advertisements, registration agreements, charges, and learning records.|Official training provider support, consumer complaint channels, or professional service channels.
`.trim().split('\n');
const themesEn = Object.fromEntries(themeRows.map((row, i) => {
  const [title, verify, evidence, channel] = row.split('|');
  return ['t' + String(i + 1).padStart(2, '0'), { title, verify, evidence, channel }];
}));
function isEnglish(locale) { return /^en(?:-|$)/i.test(locale || ''); }
function isCantonese(locale) { return /^(?:yue(?:-|$)|zh-(?:HK|MO)(?:-|$))/i.test(locale || ''); }
function originalTheme(t) {
  if (t && typeof t === 'object' && t.verify) return t;
  const id = typeof t === 'string' ? t : t && (t.theme || t.id);
  return (globalThis.FAYI_LIBRARY && FAYI_LIBRARY.themes || []).find(x => x.id === id) || null;
}
function theme(t, locale) {
  const original = originalTheme(t);
  const id = typeof t === 'string' ? t : t && (t.theme || t.id);
  if (isEnglish(locale)) return themesEn[id] || null;
  return original;
}
function story(p, locale) {
  if (!p) return '';
  if (isEnglish(locale)) return storiesEn[p.id] || '';
  return p.story || p.title || '';
}
function narration(p, stage, locale) {
  if (!p) return '';
  const n = Math.max(0, Math.min(2, Number(stage) || 0));
  const translatedStory = story(p, locale);
  const t = theme(p.theme, locale);
  if (!translatedStory || !t) return '';
  if (isEnglish(locale)) {
    const instruction = [
      'Step one: check the facts. ' + t.verify,
      'Step two: keep relevant original records. Relevant records include: ' + t.evidence + ' Protect personal information and keep the original context.',
      'Step three: find support. Suggested support: ' + t.channel + ' Explain what happened, the timeline, the records you have, and what you want help with.'
    ][n];
    return 'This is a fictional learning scenario. ' + translatedStory + ' ' + instruction;
  }
  if (isCantonese(locale)) {
    return '呢個係虛構嘅學習情景。' + translatedStory + ' ' + [
      '第一步，唔使心急，先核實清楚。' + t.verify + '。睇清楚再決定點做。',
      '第二步，留返有關嘅原始資料。' + t.evidence + '。記低時間同來源，唔好刪改，亦唔好隨便公開私人資料。',
      '第三步，搵合適嘅人幫手。可以聯絡' + t.channel + '。講清楚發生咩事、幾時發生、手上有咩資料，同埋想點樣處理。'
    ][n];
  }
  return '这是虚构的学习情景。' + translatedStory + ' ' + [
    '第一步，先核实。' + t.verify + '。',
    '第二步，保留相关原始材料。' + t.evidence + '。记录时间和来源，不随意删改，也不公开私人信息。',
    '第三步，找支持。可以联系' + t.channel + '。说明经过、时间、现有材料和希望解决的问题。'
  ][n];
}
globalThis.FAYI_LIBRARY_SPEECH = { version: '2026-10-19-translation-draft', review: 'draft', storiesEn, themesEn, story, theme, narration, isEnglish, isCantonese };
if (typeof module !== 'undefined') module.exports = globalThis.FAYI_LIBRARY_SPEECH;
})();
