const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const HTTP_PORT = process.env.PORT || 8081;
//use to add support for incoming JSON entities//

app.use(bodyParser.json());

//deliver a home page to browsers client
app.get('/', (req, res) => {
	res.status(200).sendFile(path.join(__dirname, '/index.html'));
})

//get all object 
app.get('/api/items', (req, res) => {
	let c = items.map(i => i);
	//console.log(c);

	//sorting the list based on the lastName, firstName
	// let sortedItem = c.sort((a, b) => {
	// 	return a.last_name.localeCompare(b.last_name) || a.first_name.localeCompare(b.first_name) || 0;
	// })

	//sorting based on creditScore
	let sortedItem = c.sort((a, b) => a.creditScore - b.creditScore);
	if (sortedItem) {
		return res.status(200).json({ "data": sortedItem });	
	}
	res.status(404).json({"Error" : "Sorting unSuccessfull"})
	
})

//get one object 
app.get('/api/items/:itemId', (req, res) => {
	let c = items.map((i) => i);
	//console.log(c);
	let itemFound = c.find((item) => item.id === parseInt(req.params.itemId));
	console.log(itemFound);
	if(itemFound)
		return res.json({ "data" : itemFound });
	
	res.status(404).json({ "Error" : `No item with id ${req.params.itemId}`})
});


//Add new object
app.post(`/api/items`, (req, res) => {
	res.status(201).json({message: `added a new item: ${req.body.firstName} ${req.body.lastName} `})
})

app.listen(HTTP_PORT, () => {
	console.log('Listening on Port : 8081');
});



const items = [{ "id": 1, "first_name": "Lise", "last_name": "Coper", "gender": "Female", "birthDate": "1996-11-15T03:33:30Z", "email": "lcoper0@bbc.co.uk", "web": "https://nydailynews.com/primis/in.js?faucibus=proin&orci=at&luctus=turpis&et=a&ultrices=pede&posuere=posuere&cubilia=nonummy&curae=integer&mauris=non&viverra=velit&diam=donec&vitae=diam&quam=neque&suspendisse=vestibulum&potenti=eget&nullam=vulputate&porttitor=ut&lacus=ultrices&at=vel&turpis=augue&donec=vestibulum&posuere=ante&metus=ipsum&vitae=primis&ipsum=in&aliquam=faucibus&non=orci&mauris=luctus&morbi=et&non=ultrices&lectus=posuere&aliquam=cubilia&sit=curae&amet=donec&diam=pharetra&in=magna&magna=vestibulum&bibendum=aliquet&imperdiet=ultrices&nullam=erat&orci=tortor&pede=sollicitudin&venenatis=mi&non=sit&sodales=amet&sed=lobortis&tincidunt=sapien&eu=sapien&felis=non&fusce=mi&posuere=integer&felis=ac&sed=neque&lacus=duis&morbi=bibendum&sem=morbi&mauris=non&laoreet=quam&ut=nec&rhoncus=dui&aliquet=luctus&pulvinar=rutrum&sed=nulla&nisl=tellus&nunc=in&rhoncus=sagittis&dui=dui&vel=vel&sem=nisl&sed=duis&sagittis=ac&nam=nibh", "creditScore": 421, "rating": 7.21 },
{ "id": 2, "first_name": "Penny", "last_name": "Dorrell", "gender": "Female", "birthDate": "1999-03-17T21:21:49Z", "email": "pdorrell1@studiopress.com", "web": "http://businessweek.com/tortor/eu/pede.xml?consequat=consequat&metus=ut&sapien=nulla&ut=sed&nunc=accumsan&vestibulum=felis&ante=ut&ipsum=at&primis=dolor&in=quis&faucibus=odio&orci=consequat&luctus=varius&et=integer&ultrices=ac&posuere=leo&cubilia=pellentesque&curae=ultrices&mauris=mattis&viverra=odio&diam=donec&vitae=vitae&quam=nisi&suspendisse=nam&potenti=ultrices&nullam=libero&porttitor=non&lacus=mattis&at=pulvinar&turpis=nulla&donec=pede&posuere=ullamcorper&metus=augue&vitae=a&ipsum=suscipit&aliquam=nulla&non=elit&mauris=ac&morbi=nulla&non=sed&lectus=vel&aliquam=enim&sit=sit&amet=amet&diam=nunc&in=viverra&magna=dapibus&bibendum=nulla&imperdiet=suscipit&nullam=ligula&orci=in&pede=lacus&venenatis=curabitur&non=at&sodales=ipsum&sed=ac&tincidunt=tellus&eu=semper&felis=interdum&fusce=mauris&posuere=ullamcorper&felis=purus&sed=sit&lacus=amet&morbi=nulla&sem=quisque&mauris=arcu&laoreet=libero&ut=rutrum&rhoncus=ac&aliquet=lobortis&pulvinar=vel&sed=dapibus&nisl=at&nunc=diam&rhoncus=nam&dui=tristique&vel=tortor", "creditScore": 378, "rating": 18.43 },
{ "id": 3, "first_name": "Abba", "last_name": "Maffi", "gender": "Male", "birthDate": "1997-03-20T19:10:18Z", "email": "amaffi2@china.com.cn", "web": "http://blogger.com/morbi/odio/odio.jpg?justo=proin&in=risus&hac=praesent", "creditScore": 593, "rating": 10.42 },
{ "id": 4, "first_name": "Corenda", "last_name": "Chaim", "gender": "Female", "birthDate": "1998-05-31T01:55:56Z", "email": "cchaim3@alexa.com", "web": "https://e-recht24.de/mattis/odio/donec/vitae.aspx?vestibulum=nunc&ante=commodo&ipsum=placerat&primis=praesent&in=blandit&faucibus=nam&orci=nulla&luctus=integer&et=pede&ultrices=justo&posuere=lacinia&cubilia=eget&curae=tincidunt&nulla=eget&dapibus=tempus&dolor=vel&vel=pede&est=morbi&donec=porttitor&odio=lorem&justo=id&sollicitudin=ligula&ut=suspendisse&suscipit=ornare&a=consequat&feugiat=lectus", "creditScore": 589, "rating": 12.91 },
{ "id": 5, "first_name": "Welsh", "last_name": "Chown", "gender": "Male", "birthDate": "1998-02-19T23:16:55Z", "email": "wchown4@youtu.be", "web": "https://squarespace.com/vestibulum.js?aliquam=interdum&erat=venenatis&volutpat=turpis&in=enim&congue=blandit&etiam=mi&justo=in&etiam=porttitor&pretium=pede&iaculis=justo&justo=eu&in=massa&hac=donec&habitasse=dapibus&platea=duis&dictumst=at&etiam=velit&faucibus=eu&cursus=est&urna=congue&ut=elementum&tellus=in&nulla=hac&ut=habitasse&erat=platea&id=dictumst&mauris=morbi&vulputate=vestibulum&elementum=velit&nullam=id&varius=pretium&nulla=iaculis&facilisi=diam&cras=erat&non=fermentum&velit=justo&nec=nec&nisi=condimentum&vulputate=neque&nonummy=sapien&maecenas=placerat&tincidunt=ante&lacus=nulla&at=justo", "creditScore": 354, "rating": 16.32 },
{ "id": 6, "first_name": "Fawn", "last_name": "Siddall", "gender": "Female", "birthDate": "1993-04-08T23:35:27Z", "email": "fsiddall5@goo.gl", "web": "https://goodreads.com/sapien/varius/ut/blandit/non.png?penatibus=felis&et=sed&magnis=interdum&dis=venenatis&parturient=turpis&montes=enim&nascetur=blandit&ridiculus=mi&mus=in", "creditScore": 205, "rating": 12.77 },
{ "id": 7, "first_name": "Kare", "last_name": "Cham", "gender": "Bigender", "birthDate": "1994-02-10T02:25:36Z", "email": "kcham6@elegantthemes.com", "web": "http://shop-pro.jp/vel/ipsum/praesent/blandit/lacinia/erat/vestibulum.png?eget=maecenas&nunc=ut&donec=massa&quis=quis&orci=augue&eget=luctus&orci=tincidunt&vehicula=nulla&condimentum=mollis&curabitur=molestie&in=lorem&libero=quisque&ut=ut&massa=erat&volutpat=curabitur&convallis=gravida&morbi=nisi&odio=at&odio=nibh&elementum=in&eu=hac&interdum=habitasse&eu=platea&tincidunt=dictumst&in=aliquam&leo=augue&maecenas=quam&pulvinar=sollicitudin&lobortis=vitae&est=consectetuer&phasellus=eget&sit=rutrum&amet=at&erat=lorem&nulla=integer&tempus=tincidunt&vivamus=ante&in=vel&felis=ipsum&eu=praesent&sapien=blandit&cursus=lacinia&vestibulum=erat&proin=vestibulum&eu=sed&mi=magna&nulla=at&ac=nunc&enim=commodo&in=placerat&tempor=praesent&turpis=blandit&nec=nam&euismod=nulla&scelerisque=integer&quam=pede&turpis=justo&adipiscing=lacinia&lorem=eget&vitae=tincidunt&mattis=eget&nibh=tempus&ligula=vel&nec=pede&sem=morbi&duis=porttitor&aliquam=lorem&convallis=id&nunc=ligula&proin=suspendisse&at=ornare&turpis=consequat&a=lectus&pede=in&posuere=est&nonummy=risus&integer=auctor&non=sed&velit=tristique&donec=in&diam=tempus&neque=sit&vestibulum=amet&eget=sem&vulputate=fusce", "creditScore": 773, "rating": 18.3 },
{ "id": 8, "first_name": "Porty", "last_name": "Alexsandrev", "gender": "Bigender", "birthDate": "1995-11-27T22:07:32Z", "email": "palexsandrev7@macromedia.com", "web": "https://icq.com/dolor/morbi/vel/lectus.json?pharetra=blandit&magna=mi&vestibulum=in&aliquet=porttitor&ultrices=pede&erat=justo&tortor=eu&sollicitudin=massa&mi=donec&sit=dapibus&amet=duis&lobortis=at&sapien=velit&sapien=eu&non=est&mi=congue&integer=elementum&ac=in&neque=hac&duis=habitasse&bibendum=platea&morbi=dictumst", "creditScore": 451, "rating": 7.57 },
{ "id": 9, "first_name": "Anatollo", "last_name": "Ettles", "gender": "Male", "birthDate": "1993-10-29T21:38:57Z", "email": "aettles8@abc.net.au", "web": "https://hubpages.com/massa.png?lorem=ante&ipsum=vivamus&dolor=tortor&sit=duis&amet=mattis&consectetuer=egestas&adipiscing=metus&elit=aenean&proin=fermentum&risus=donec&praesent=ut&lectus=mauris&vestibulum=eget&quam=massa&sapien=tempor&varius=convallis&ut=nulla&blandit=neque&non=libero&interdum=convallis", "creditScore": 490, "rating": 5.26 },
{ "id": 10, "first_name": "Doris", "last_name": "O'Collopy", "gender": "Female", "birthDate": "1995-01-25T18:47:22Z", "email": "docollopy9@home.pl", "web": "http://netvibes.com/quis.json?cum=convallis&sociis=duis&natoque=consequat&penatibus=dui&et=nec&magnis=nisi&dis=volutpat&parturient=eleifend&montes=donec&nascetur=ut&ridiculus=dolor&mus=morbi&etiam=vel&vel=lectus&augue=in&vestibulum=quam&rutrum=fringilla", "creditScore": 476, "rating": 4.02 }];