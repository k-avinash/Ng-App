/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights
 *          reserved. For licensing, see LICENSE.md or
 *          http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function(config) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	
	config.skin = 'office2013';
	
	config.toolbarGroups = [ {
		name : 'clipboard',
		groups : [ 'clipboard', 'undo' ]
	}, {
		name : 'editing',
		groups : [ 'find', 'selection', 'spellchecker' ]
	}, {
		name : 'links'
	}, {
		name : 'insert'
	}, {
		name : 'forms'
	}, {
		name : 'tools'
	}, {
		name : 'document',
		groups : [ 'mode', 'document', 'doctools' ]
	}, {
		name : 'others'
	}, '/', {
		name : 'basicstyles',
		groups : [ 'basicstyles', 'cleanup' ]
	}, {
		name : 'paragraph',
		groups : [ 'list', 'indent', 'blocks', 'align', 'bidi' ]
	}, {
		name : 'styles'
	}, {
		name : 'colors'
	}, {
		name : 'about'
	} ];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';

	config.extraAllowedContent = 'iframe[*];';
	config.extraPlugins = 'uploadimage,base64image,codeTag';
	config.filebrowserUploadUrl = 'None';
	config.filebrowserBrowseUrl = '';
	config.filebrowserImageBrowseUrl   = '';
	config.toolbar='mv_custom_toolbar';
	config.toolbar_mv_custom_toolbar=
		[
			{ name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat','Source','NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','Styles','Format','VideoDetector','-','Image','-','Code'] },
		];
};
