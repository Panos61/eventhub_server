"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeEvents1605561307017 = void 0;
class FakeEvents1605561307017 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
        insert into events (title, description, topic, creatorId) values ('European badger', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

        Fusce consequat. Nulla nisl. Nunc nisl.
        
        Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'Lima Hotel Tango Delta Charlie Kilo Echo Yankee Foxtrot Victor X-ray Romeo Zulu Quebec Golf', 1);
        insert into events (title, description, topic, creatorId) values ('Racer, blue', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
        
        Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'Kilo Alfa Foxtrot Oscar Echo India Mike Zulu Whiskey Quebec Tango Bravo Juliett November Yankee Victor Sierra Delta Charlie X-ray', 1);
        insert into events (title, description, topic, creatorId) values ('Armadillo, giant', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
        
        Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
        
        Sed ante. Vivamus tortor. Duis mattis egestas metus.', 'Yankee Kilo November Alfa Victor Tango Bravo X-ray Juliett Hotel Golf Oscar Papa India Romeo', 1);
        insert into events (title, description, topic, creatorId) values ('Mandras tree shrew', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
        
        Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'Alfa India Zulu Echo Foxtrot Hotel X-ray Oscar Quebec Uniform Mike Yankee Bravo Sierra Delta', 1);
        insert into events (title, description, topic, creatorId) values ('Hoffman''s sloth', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
        
        Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'Foxtrot Golf Bravo India Uniform Juliett X-ray Quebec Kilo Yankee Lima Whiskey Charlie November Hotel Sierra Romeo Alfa Delta', 1);
        insert into events (title, description, topic, creatorId) values ('Genoveva', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
        
        Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
        
        Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Delta Victor Charlie Tango Hotel Kilo Quebec Bravo Sierra Echo Foxtrot Papa Romeo Mike Yankee India Whiskey X-ray Golf', 1);
        insert into events (title, description, topic, creatorId) values ('Fox, pampa gray', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
        
        Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 'Echo Golf Delta Papa India Juliett November Charlie Yankee Tango Zulu Uniform Quebec Mike Bravo Lima Sierra Romeo', 1);
        insert into events (title, description, topic, creatorId) values ('Starling, cape', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 'Sierra November Tango Mike Papa Charlie Victor Delta Bravo Yankee Alfa Whiskey Juliett Lima', 1);
        insert into events (title, description, topic, creatorId) values ('Killer whale', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
        
        Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'Yankee Golf Charlie Alfa X-ray Uniform Lima Juliett Delta Romeo Zulu Echo India Papa November Hotel Mike Sierra Victor', 1);
        insert into events (title, description, topic, creatorId) values ('Vulture, bengal', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
        
        Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
        
        Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'Whiskey Mike Zulu Oscar Alfa Victor Quebec Juliett India Golf November Delta Foxtrot Uniform Hotel Papa Sierra', 1);
        insert into events (title, description, topic, creatorId) values ('Killer whale', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
        
        Sed ante. Vivamus tortor. Duis mattis egestas metus.', 'India Quebec Golf Uniform Whiskey Hotel Mike Sierra Tango Juliett November', 1);
        insert into events (title, description, topic, creatorId) values ('Common nighthawk', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'Sierra Zulu Yankee Quebec Oscar Alfa Uniform India Tango Foxtrot Whiskey November Mike Romeo Golf Lima', 1);
        insert into events (title, description, topic, creatorId) values ('Nuthatch, red-breasted', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'Golf Lima November Quebec Sierra Uniform Romeo Charlie Hotel Zulu', 1);
        insert into events (title, description, topic, creatorId) values ('Gray duiker', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'Uniform Kilo Whiskey Delta Hotel Yankee Tango Charlie Golf Lima Quebec Romeo Sierra Oscar November Papa X-ray Mike', 1);
        insert into events (title, description, topic, creatorId) values ('Red-headed woodpecker', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 'Oscar Charlie Lima Delta Papa Romeo Tango Quebec Yankee Foxtrot Alfa Golf', 1);
        insert into events (title, description, topic, creatorId) values ('Duiker, gray', 'Fusce consequat. Nulla nisl. Nunc nisl.
        
        Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
        
        In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'Foxtrot Charlie India Tango Delta Bravo Echo Quebec Alfa Victor Golf Whiskey', 1);
        insert into events (title, description, topic, creatorId) values ('Penguin, galapagos', 'In congue. Etiam justo. Etiam pretium iaculis justo.
        
        In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'Hotel Oscar Charlie Foxtrot Golf Echo X-ray Kilo Whiskey Quebec Uniform Juliett', 1);
        insert into events (title, description, topic, creatorId) values ('Old world fruit bat (unidentified)', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'Foxtrot Mike Alfa Uniform Oscar November Quebec India Bravo Golf Romeo Echo Sierra', 1);
        insert into events (title, description, topic, creatorId) values ('Lion, australian sea', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
        
        Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'Lima Echo Mike Charlie Tango Zulu Juliett Foxtrot India Kilo', 1);
        insert into events (title, description, topic, creatorId) values ('Bat, asian false vampire', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
        
        Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'Sierra Kilo Victor Uniform Echo November Yankee Charlie Romeo Juliett Lima', 1);
        insert into events (title, description, topic, creatorId) values ('Stilt, black-winged', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
        
        Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'Mike Foxtrot Kilo Papa November Whiskey Yankee Bravo Uniform Lima Juliett Quebec Echo Delta Victor Hotel', 1);
        insert into events (title, description, topic, creatorId) values ('Kongoni', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
        
        In congue. Etiam justo. Etiam pretium iaculis justo.
        
        In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'Juliett Lima Tango Zulu X-ray Oscar Foxtrot Bravo Yankee Quebec India Delta Sierra November Uniform Victor Mike', 1);
        insert into events (title, description, topic, creatorId) values ('Grouse, sage', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
        
        Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
        
        Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'Alfa Juliett Tango Yankee Lima India Romeo Foxtrot November Papa Delta Kilo Quebec Whiskey Oscar Charlie X-ray Sierra', 1);
        insert into events (title, description, topic, creatorId) values ('African wild cat', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
        
        Fusce consequat. Nulla nisl. Nunc nisl.', 'Charlie Sierra Kilo Juliett November Bravo Victor Oscar Yankee Romeo X-ray Papa Whiskey Quebec Tango India', 1);
        insert into events (title, description, topic, creatorId) values ('Mockingbird, galapagos', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
        
        Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'Bravo Quebec Victor Golf Juliett Lima Hotel Kilo Foxtrot India Oscar Tango Yankee Echo Delta Charlie', 1);
        insert into events (title, description, topic, creatorId) values ('Pintail, white-cheeked', 'Fusce consequat. Nulla nisl. Nunc nisl.', 'Bravo Kilo Whiskey Golf X-ray Quebec Hotel Echo Tango Foxtrot', 1);
        insert into events (title, description, topic, creatorId) values ('Bengal vulture', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Yankee Whiskey Echo India Lima Alfa Kilo Romeo Victor Juliett Uniform Zulu Bravo', 1);
        insert into events (title, description, topic, creatorId) values ('Defassa waterbuck', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
        
        Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'Papa Bravo Quebec Lima Foxtrot Charlie Echo India Victor Zulu Yankee Juliett Alfa Kilo Sierra', 1);
        insert into events (title, description, topic, creatorId) values ('Thomson''s gazelle', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
        
        Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'November Alfa Zulu X-ray Juliett Romeo Oscar Tango Quebec Lima Mike Delta Golf Sierra Whiskey', 1);
        insert into events (title, description, topic, creatorId) values ('Wallaby, dama', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 'Delta Echo November X-ray Hotel Sierra Yankee Charlie India Papa Tango Juliett Zulu Bravo', 1);
        insert into events (title, description, topic, creatorId) values ('Netted rock dragon', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
        
        Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'Quebec November India Alfa Yankee Zulu Tango Echo X-ray Hotel Victor Uniform Golf Lima Delta Oscar Foxtrot Kilo Papa', 1);
        insert into events (title, description, topic, creatorId) values ('Barking gecko', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
        
        Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
        
        Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'Delta Oscar November Victor Charlie Tango Hotel Quebec X-ray Uniform Foxtrot Alfa Echo Sierra Papa', 1);
        insert into events (title, description, topic, creatorId) values ('Otter, african clawless', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
        
        Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 'Papa Quebec Yankee Whiskey Hotel Romeo Alfa Zulu Uniform Tango Victor Delta X-ray Juliett Echo Foxtrot Bravo Kilo Lima', 1);
        insert into events (title, description, topic, creatorId) values ('Sugar glider', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
        
        Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'Echo Bravo Whiskey Golf Hotel Romeo Mike Juliett November Yankee Uniform Kilo Sierra Alfa', 1);
        insert into events (title, description, topic, creatorId) values ('European red squirrel', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
        
        Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'Romeo Kilo X-ray Zulu Echo Hotel Golf Lima Charlie Juliett Uniform Whiskey', 1);
        insert into events (title, description, topic, creatorId) values ('Cliffchat, mocking', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
        
        Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 'November Alfa Lima Sierra Tango Golf Bravo Uniform Papa X-ray Kilo Charlie Hotel Delta', 1);
        insert into events (title, description, topic, creatorId) values ('Pale white-eye', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
        
        Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
        
        Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'Tango November Victor Yankee Hotel Papa Juliett Sierra Charlie Mike Delta Quebec Golf Alfa Whiskey X-ray Echo Lima', 1);
        insert into events (title, description, topic, creatorId) values ('Orca', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'Papa Zulu Quebec Tango Bravo Mike Foxtrot Victor Yankee Alfa Delta Sierra November Uniform Oscar Hotel', 1);
        insert into events (title, description, topic, creatorId) values ('Sloth, pale-throated three-toed', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
        
        In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'Mike Bravo Alfa Quebec Charlie Oscar Victor November Whiskey Hotel Uniform India Sierra Romeo Delta Foxtrot', 1);
        insert into events (title, description, topic, creatorId) values ('Glider, feathertail', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'Victor Echo India Juliett Papa X-ray Oscar Tango Golf Foxtrot Sierra Quebec Mike Whiskey Yankee Zulu Lima', 1);
        insert into events (title, description, topic, creatorId) values ('Yak', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
        
        Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'Papa Sierra November Golf Zulu Echo Whiskey India Charlie Lima Kilo Victor Yankee Mike Tango Oscar', 1);
        insert into events (title, description, topic, creatorId) values ('White-throated robin', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
        
        Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'India Kilo Papa Charlie November Delta X-ray Quebec Echo Mike Alfa Yankee Golf Hotel Tango Juliett Foxtrot', 1);
        insert into events (title, description, topic, creatorId) values ('Mississippi alligator', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'Echo Uniform Kilo Golf Hotel Quebec Mike Bravo India Foxtrot Delta Papa Tango Sierra', 1);
        insert into events (title, description, topic, creatorId) values ('Brown capuchin', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.
        
        Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'Romeo Juliett Sierra Hotel Golf Charlie Victor Alfa Echo India Foxtrot Kilo November Delta Oscar Papa Whiskey', 1);
        insert into events (title, description, topic, creatorId) values ('Red-billed buffalo weaver', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'Echo Foxtrot X-ray Golf Bravo Charlie Whiskey November Romeo Mike', 1);
        insert into events (title, description, topic, creatorId) values ('White-eye, cape', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'Bravo Delta Charlie India Quebec Juliett Uniform Victor Mike Foxtrot Zulu Golf Alfa Echo', 1);
        insert into events (title, description, topic, creatorId) values ('Fisher', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'X-ray India Golf Yankee Lima Kilo Uniform Charlie Hotel Foxtrot Zulu Mike Delta Quebec Whiskey Victor Papa', 1);
        insert into events (title, description, topic, creatorId) values ('Indian leopard', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
        
        In congue. Etiam justo. Etiam pretium iaculis justo.', 'Papa Bravo Foxtrot Kilo Charlie Victor Hotel Mike Quebec India Romeo Zulu Golf Delta Whiskey Echo Yankee Alfa', 1);
        insert into events (title, description, topic, creatorId) values ('Glossy ibis', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
        
        Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'Zulu Juliett Echo Hotel November Uniform Tango Oscar Golf X-ray Kilo Delta India Bravo Victor Romeo Lima Mike Sierra Papa', 1);
        insert into events (title, description, topic, creatorId) values ('Caiman, spectacled', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
        
        Fusce consequat. Nulla nisl. Nunc nisl.
        
        Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'Juliett November Mike Echo Tango X-ray Lima Quebec Sierra Kilo Uniform Delta Alfa', 1);
        insert into events (title, description, topic, creatorId) values ('Bandicoot, long-nosed', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
        
        Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 'Alfa Mike Yankee Victor Golf Delta November Hotel Juliett Bravo Sierra Lima X-ray Whiskey Papa', 1);
        insert into events (title, description, topic, creatorId) values ('Fox, silver-backed', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 'Sierra Romeo Echo Yankee Charlie Bravo Delta Quebec India Juliett Papa', 1);
        insert into events (title, description, topic, creatorId) values ('Chilean flamingo', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'X-ray Oscar Juliett Romeo Zulu Delta Papa Alfa Golf Sierra Charlie', 1);
        insert into events (title, description, topic, creatorId) values ('Brush-tailed rat kangaroo', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
        
        In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
        
        Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'Foxtrot Charlie Uniform Yankee Tango November Hotel Victor Zulu Whiskey India X-ray Echo Romeo Sierra', 1);
        insert into events (title, description, topic, creatorId) values ('Swan, black', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'Sierra Hotel Foxtrot Whiskey Juliett Lima Echo Tango Charlie Golf Quebec Zulu', 1);
        insert into events (title, description, topic, creatorId) values ('River wallaby', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 'Papa Tango Whiskey Delta Romeo Yankee India Mike Victor Foxtrot', 1);
        insert into events (title, description, topic, creatorId) values ('Robin, kalahari scrub', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
        
        Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'Alfa Mike Delta Bravo Romeo India Uniform Juliett Charlie X-ray Papa Foxtrot Quebec', 1);
        insert into events (title, description, topic, creatorId) values ('Horned rattlesnake', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'Uniform Delta Romeo Yankee Bravo Sierra Mike Hotel Tango November Juliett Lima Echo Kilo', 1);
        insert into events (title, description, topic, creatorId) values ('Warthog', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Delta Charlie Mike Juliett Alfa Quebec November Foxtrot Whiskey Kilo Romeo India Yankee Victor Papa Tango Lima Sierra Bravo X-ray', 1);
        insert into events (title, description, topic, creatorId) values ('Polecat, african', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
        
        Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'Uniform Sierra Bravo Tango Whiskey Victor Zulu Echo Charlie India Juliett Papa', 1);
        insert into events (title, description, topic, creatorId) values ('Otter, giant', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
        
        Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
        
        Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'Tango Foxtrot Whiskey Victor Golf Charlie Juliett Sierra November Oscar Mike Kilo Uniform Delta Romeo Bravo', 1);
        insert into events (title, description, topic, creatorId) values ('Cockatoo, slender-billed', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Kilo Tango Romeo Whiskey X-ray Charlie Juliett Alfa Echo Uniform India Zulu Victor Papa', 1);
        insert into events (title, description, topic, creatorId) values ('Common palm civet', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
        
        Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'Lima Delta Uniform Charlie Echo Tango Papa X-ray Whiskey Golf Quebec Sierra Yankee Romeo Victor Oscar Juliett Foxtrot November Mike', 1);
        insert into events (title, description, topic, creatorId) values ('White-winged tern', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'Juliett Bravo Papa Oscar Uniform Whiskey Delta Tango Victor Alfa Echo Sierra Foxtrot Zulu Yankee November Golf Charlie Mike', 1);
        insert into events (title, description, topic, creatorId) values ('Cockatoo, sulfur-crested', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
        
        Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
        
        Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'November Uniform Delta Echo Charlie Alfa Oscar Tango Kilo Foxtrot X-ray Golf Zulu', 1);
        insert into events (title, description, topic, creatorId) values ('Kaffir cat', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        
        Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'Charlie Kilo Victor Quebec Zulu Sierra X-ray Oscar Alfa Echo Bravo Juliett India November Golf Uniform Yankee Hotel Foxtrot Lima', 1);
        insert into events (title, description, topic, creatorId) values ('Saddle-billed stork', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 'Mike Alfa Lima Bravo Sierra Whiskey Golf Foxtrot Yankee Delta Tango Quebec Victor Juliett Oscar Papa X-ray Zulu November India', 1);
        insert into events (title, description, topic, creatorId) values ('Madagascar hawk owl', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
        
        Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
        
        Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'X-ray Delta Foxtrot Kilo Lima Sierra Echo Papa Mike Oscar', 1);
        insert into events (title, description, topic, creatorId) values ('Grouse, greater sage', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'Mike Quebec Romeo Uniform Victor Echo Papa November Alfa Yankee Foxtrot Bravo Sierra Kilo Golf Charlie India Whiskey', 1);
        insert into events (title, description, topic, creatorId) values ('Cat, tiger', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 'November Hotel X-ray Victor Foxtrot Romeo Papa Bravo Lima Oscar Tango India Echo Whiskey Juliett Alfa Zulu Golf Uniform', 1);
        
        `);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.FakeEvents1605561307017 = FakeEvents1605561307017;
//# sourceMappingURL=1605561307017-FakeEvents.js.map