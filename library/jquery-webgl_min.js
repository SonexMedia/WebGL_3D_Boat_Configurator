!function(e){e.fn.showModel=function(o){var i=this;return i.elemID="",i.objList=o,i.render_id=0,i.m_color=16711680,i.clock=new THREE.Clock,i.obj_boart=null,i.view_angle=45,i.near=.1,i.far=2e3,i.camera_x=0,i.camera_y=100,i.camera_z=400,i.camera_lx=0,i.camera_ly=0,i.camera_lz=0,i.dlight=16777215,i.hlight=16777215,i.hopacity=.3,i.hemi_h=.58,i.hemi_s=.16,i.hemi_l=.88,i.hemi_x=0,i.hemi_y=200,i.hemi_z=0,i.light_x=-100,i.light_y=100,i.light_z=150,i.gcolor_h=.095,i.gcolor_s=.5,i.gcolor_l=.5,i.shininess=2,i.ambient=9868950,i.amb_color=16777215,i.specular=15066597,i.opacity=100,i.mirror=null,i.obj_scaleX=1,i.obj_scaleY=1,i.obj_scaleZ=1,i.init=function(){i.elemID=e(this).attr("id"),i.initScene(),i.initCamera(),i.initRenderer(),i.initLights(),i.initElement(),i.initControl(),i.initGround(),i.render(),i.initColorBar(),i.canvControl()},i.initElement=function(){document.getElementById(i.elemID).appendChild(i.webGLRenderer.domElement)},i.initScene=function(){i.scene=new THREE.Scene},i.initColorBar=function(){e("#color_box li").each(function(){e(this).css("background-color",e(this).attr("color"))}),e("#color_box li").click(function(){var o=e(this).attr("color");e("#color_box .sel").removeClass("sel"),e("#txt_color").val(o),e(this).addClass("sel"),i.obj_boart&&(i.obj_boart.children[2].material.color=new THREE.Color(o))})},i.canvControl=function(){e("#control_area li").click(function(){var o=e(this).index();switch(o){case 0:i.obj_boart.rotation.z=i.obj_boart.rotation.z+.25;break;case 1:i.orbitControls.zoomIn(1.1);break;case 2:i.orbitControls.zoomOut(1.1)}})},i.initCamera=function(){i.screen_width=e("#"+i.elemID).width(),i.screen_height=window.innerHeight;var o=i.screen_width/i.screen_height;i.camera=new THREE.PerspectiveCamera(i.view_angle,o,i.near,i.far),i.scene.add(i.camera),e(window).width()<700&&(i.camera_z=1e3),i.camera.position.set(i.camera_x,i.camera_y,i.camera_z),i.camera.lookAt(new THREE.Vector3(i.camera_lx,i.camera_ly,i.camera_lz))},i.initControl=function(){console.log(i.webGLRenderer.domElement),i.orbitControls=new THREE.OrbitControls(i.camera,i.webGLRenderer.domElement),i.orbitControls.maxDistance=i.far},i.initRenderer=function(){i.webGLRenderer=new THREE.WebGLRenderer({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),i.webGLRenderer.setSize(i.screen_width,i.screen_height),i.webGLRenderer.shadowMapEnabled=!0,i.webGLRenderer.shadowMapSoft=!0},i.initGround=function(){return},i.initLights=function(){var e=new THREE.DirectionalLight(i.dlight),o=new THREE.DirectionalLight(i.dlight),t=new THREE.HemisphereLight(i.hlight,i.hlight,i.hopacity);t.color.setHSL(i.hemi_h,i.hemi_s,i.hemi_l),t.groundColor.setHSL(i.gcolor_h,i.gcolor_s,i.gcolor_l),t.position.set(i.hemi_x,i.hemi_y,i.hemi_z),e.position.set(i.light_x,i.light_y,i.light_z),e.target.position.copy(i.scene.position),o.position.set(-1*i.light_x,i.light_y,-1*i.light_z),o.target.position.copy(i.scene.position),e.castShadow=!0,i.scene.add(t),i.scene.add(e),i.scene.add(o)},i.dispObjects=function(){i.objList&&i.objList.length&&i.objList[i.render_id]&&i.addObject(i.objList[i.render_id])},i.addObject=function(e){var o=0,t=0,n=0,r=new THREE.OBJLoader,a=new THREE.MTLLoader,c=e.obj,l=e.mtl,o=(e.color?e.color:i.m_color,e.pos_x?e.pos_x:0),t=e.pos_y?e.pos_y:0,n=e.pos_z?e.pos_z:0,s=(e.scale_x,e.scale_y,e.scale_z,function(e){if(e.lengthComputable){e.loaded/e.total*100}}),_=function(e){};a.load(l,function(e){e.preload(),r.setMaterials(e),r.load(c,function(e){e.position.x=o,e.position.y=t,e.position.z=n,e.scale.set(i.obj_scaleX,i.obj_scaleY,i.obj_scaleZ),e.rotation.x=Math.PI/-2,e.rotation.z=Math.PI/2,i.obj_boart=e,i.scene.add(e)})},s,_)},i.render=function(){var e=i.clock.getDelta();i.orbitControls.update(e),requestAnimationFrame(i.render),i.mirror&&i.mirror.render(),i.webGLRenderer.render(i.scene,i.camera)},i.init(),i}}(jQuery);