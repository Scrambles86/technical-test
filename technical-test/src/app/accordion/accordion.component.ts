import { AccordionData } from './../models/accordion-data.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  data: AccordionData[] = [
    {
      id: 1,
      title: 'Title 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan orci non blandit faucibus. Aenean.',
      display: false
    },
    {
      id: 2,
      title: 'Title 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus augue sed enim varius pellentesque. Fusce efficitur metus vitae massa consectetur, vitae porttitor sapien facilisis. Ut risus metus, ornare vitae ante id, congue fringilla quam. Maecenas et ornare risus. Donec vitae libero eget justo tempus aliquam. Vestibulum aliquet lacus non feugiat varius. Maecenas interdum augue eu dui fermentum, rhoncus volutpat sem eleifend. Proin ex ipsum, posuere vel lectus non, tincidunt egestas lectus. Duis tristique ipsum vitae leo dignissim gravida. Maecenas malesuada metus sit amet ultricies faucibus. Fusce sodales vehicula neque ac mattis.',
      display: false
    },
    {
      id: 3,
      title: 'Title 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut neque quis turpis ultrices scelerisque at ac sem. Nullam dapibus pellentesque magna, et varius ipsum mattis ut. Cras facilisis erat ut ex imperdiet, et varius ante finibus. Aenean pulvinar nunc leo. Pellentesque dictum eros a massa ultricies elementum. Sed tristique tristique eros, at malesuada velit fermentum in. Proin eu tempor urna. Aliquam ac malesuada odio, at auctor eros. Donec porta non urna eu scelerisque. Maecenas consectetur velit magna, eget dignissim lorem porta vel. Ut ac lobortis erat. Curabitur tincidunt vitae justo in ornare. Donec facilisis et lorem a fermentum. Sed fringilla vehicula nisl, a dapibus sapien gravida et. Pellentesque vitae fringilla est. Nunc urna nisl, lacinia id sapien vitae, mollis finibus lectus. Sed aliquam quis magna eu consequat. Phasellus a egestas turpis. Mauris varius nunc augue, sit amet cursus nisi efficitur non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis lacus eu turpis egestas tristique eu id purus. Curabitur enim nulla, bibendum in dictum eget, lobortis in leo. Ut pharetra leo sed massa consequat consectetur. Cras mattis iaculis velit.',
      display: false
    },
    {
      id: 4,
      title: 'Title 4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at felis vitae erat vulputate ultricies a sit amet lacus. Aliquam congue urna mi, in lacinia massa dignissim eu. Sed gravida, mauris vel consequat volutpat, mauris leo aliquet tortor, ut convallis ex turpis sit amet nibh. Donec iaculis ex quis nisi pulvinar feugiat. Vestibulum pulvinar cursus arcu efficitur faucibus. Praesent ullamcorper eu tortor in elementum. Nulla ac dui lacus. Phasellus pharetra ex et consequat vulputate. Ut a libero ac ligula auctor fringilla ullamcorper nec elit. Mauris ut justo lectus. Donec lacinia aliquam facilisis. Cras vitae ante eleifend, placerat ipsum nec, laoreet turpis. Vivamus eu placerat nibh, ut dapibus est. Ut malesuada est leo. Mauris ultrices ut purus id pellentesque. Ut venenatis euismod lectus. Donec purus ipsum, efficitur sed justo eget, consequat pharetra dolor. Maecenas eleifend gravida convallis. Pellentesque sit amet quam nunc. Praesent felis risus, tristique et vulputate non, finibus efficitur nisi. Nulla in fringilla dui, vel condimentum lacus. Phasellus vel auctor neque. Donec porta ante et magna molestie, nec rutrum odio feugiat. Praesent ac tristique sem. Maecenas hendrerit elit eu viverra scelerisque. Etiam efficitur cursus nunc eu imperdiet. Cras pretium, velit sed suscipit scelerisque, tortor urna tempor risus, a varius neque orci sit amet nunc. Nullam id orci quis metus ultrices ornare sed non erat. Nunc sit amet turpis vitae massa mollis elementum. In feugiat ex sit amet congue scelerisque. Maecenas fringilla bibendum velit eu iaculis. Fusce eleifend velit sed viverra scelerisque. Vestibulum non consectetur mi. Integer consequat neque sed orci suscipit vestibulum. Quisque ut laoreet ipsum. Sed in nunc ac ligula feugiat mollis. Nunc consequat aliquam magna vitae consequat. Donec convallis, mauris eu faucibus ultricies, nulla sapien tincidunt elit, id pellentesque erat enim ornare ante. Aenean aliquam mi risus. Sed ac justo finibus, pulvinar justo eget, pretium velit. Ut facilisis eu leo vitae elementum. Nulla sed lacus urna. Vivamus tempus mi nec urna mollis, eget venenatis ligula pharetra. Aliquam eu mattis dui, vitae dictum eros. Proin vitae sapien at enim pulvinar tempus. Fusce eget turpis vitae magna porta consequat sed quis ante. Praesent ut pulvinar nisl. Duis rutrum tincidunt porta. Ut nec enim et diam elementum accumsan. Nulla libero sem, feugiat in mattis in, malesuada id turpis. Fusce metus est, suscipit sed tellus sed, viverra cursus diam. Sed vehicula, felis auctor pretium finibus, nulla dui bibendum mi, sed efficitur est felis a purus. Nunc mi quam, pellentesque ut tristique eu, gravida vel lacus. Sed non volutpat eros, eu hendrerit velit. Ut accumsan imperdiet libero ac aliquet. Vivamus auctor libero nec consectetur aliquam. Proin ullamcorper nisl non sem iaculis, eu efficitur libero pretium. Nam cursus posuere mauris, vitae tempus mauris blandit quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc molestie leo quis justo malesuada, mollis faucibus lorem congue. Suspendisse placerat metus magna, a egestas justo molestie eu. Proin non suscipit sem. Phasellus viverra bibendum iaculis. Donec massa lorem, posuere non egestas eget, feugiat quis felis. Aliquam erat volutpat. Ut volutpat quis risus a pretium.',
      display: false
    },
    {
      id: 5,
      title: 'Title 5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      display: false
    }
  ];

  constructor() { }

  accordionToggle(item: AccordionData):void {
    const element = document.getElementById(`accordion__sub-item-${item.id}`);
    item.display = !item.display;
    if (element) {
    element.classList.contains('hide')
      ? element.classList.remove('hide')
      : element.classList.add('hide');
    }
  }
}
