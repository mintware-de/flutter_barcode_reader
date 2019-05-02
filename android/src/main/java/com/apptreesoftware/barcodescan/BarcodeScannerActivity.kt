package com.apptreesoftware.barcodescan

import android.Manifest
import android.app.Activity
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.content.res.Configuration
import android.graphics.*
import android.os.Bundle
import android.support.v4.app.ActivityCompat
import android.support.v4.content.ContextCompat
import android.util.AttributeSet
import android.view.View
import android.widget.Button
import android.widget.LinearLayout
import com.google.zxing.Result
import com.yourcompany.barcodescan.R
import me.dm7.barcodescanner.core.DisplayUtils
import me.dm7.barcodescanner.core.IViewFinder
import me.dm7.barcodescanner.zxing.ZXingScannerView

class BarcodeScannerActivity : Activity(), ZXingScannerView.ResultHandler
{
    lateinit var scannerView : BarcodeScannerLayout

	lateinit var camera : LinearLayout
	lateinit var closeButton : Button
	lateinit var flashButton : Button

    companion object
    {
        val REQUEST_TAKE_PHOTO_CAMERA_PERMISSION = 100
    }

    override fun onCreate(savedInstanceState: Bundle?)
    {
        super.onCreate(savedInstanceState)

        title = ""

        setContentView(R.layout.activity_barcodescanner)

        scannerView = BarcodeScannerLayout(this)

		camera = findViewById(R.id.camera)
		camera.addView(scannerView)

		closeButton = findViewById(R.id.close_button)
		flashButton = findViewById(R.id.flash_button)
    }

    override fun onResume()
	{
        super.onResume()
        scannerView.setResultHandler(this)
        // start camera immediately if permission is already given
        if (!requestCameraAccessIfNecessary()) {
            scannerView.startCamera()
        }
    }

    override fun onPause()
	{
        super.onPause()
        scannerView.stopCamera()
    }

	fun clickedToggleFlash(v: View)
	{
		scannerView.flash = !scannerView.flash
		if (scannerView.flash)
			flashButton.text = "Flash Off"
		else
			flashButton.text = "Flash On"
	}

	fun clickedClose(v:View)
	{
		scannerView.setResultHandler(null)
		finishWithError("")
	}

    override fun handleResult(result: Result?) {
        val intent = Intent()
        intent.putExtra("SCAN_RESULT", result.toString())
        setResult(RESULT_OK, intent)
        finish()
    }

    fun finishWithError(errorCode: String) {
        val intent = Intent()
        intent.putExtra("ERROR_CODE", errorCode)
        setResult(RESULT_CANCELED, intent)
        finish()
    }

    private fun requestCameraAccessIfNecessary(): Boolean {
        val array = arrayOf(Manifest.permission.CAMERA)
        if (ContextCompat
                .checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {

            ActivityCompat.requestPermissions(this, array,
                    REQUEST_TAKE_PHOTO_CAMERA_PERMISSION)
            return true
        }
        return false
    }

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>,grantResults: IntArray) {
        when (requestCode) {
            REQUEST_TAKE_PHOTO_CAMERA_PERMISSION -> {
                if (PermissionUtil.verifyPermissions(grantResults)) {
                    scannerView.startCamera()
                } else {
                    finishWithError("PERMISSION_NOT_GRANTED")
                }
            }
            else -> {
                super.onRequestPermissionsResult(requestCode, permissions, grantResults)
            }
        }
    }
}

object PermissionUtil {

    /**
     * Check that all given permissions have been granted by verifying that each entry in the
     * given array is of the value [PackageManager.PERMISSION_GRANTED].

     * @see Activity.onRequestPermissionsResult
     */
    fun verifyPermissions(grantResults: IntArray): Boolean {
        // At least one result must be checked.
        if (grantResults.size < 1) {
            return false
        }

        // Verify that each required permission has been granted, otherwise return false.
        for (result in grantResults) {
            if (result != PackageManager.PERMISSION_GRANTED) {
                return false
            }
        }
        return true
    }
}

class BarcodeScannerLayout(context: Context?) : me.dm7.barcodescanner.zxing.ZXingScannerView(context)
{
	init
	{
		setAutoFocus(true)
		// this paramter will make your HUAWEI phone works great!
		setAspectTolerance(0.5f)
	}

	override fun createViewFinderView(context: Context): IViewFinder
	{
		return BarcodeScannerViewFinder(context)
	}
}

class BarcodeScannerViewFinder : View, IViewFinder
{

	private var mFramingRect: Rect? = null
	private var scannerAlpha: Int = 0

	private val mDefaultLaserColor = resources.getColor(R.color.viewfinder_laser)
	private val mDefaultMaskColor = resources.getColor(R.color.viewfinder_mask)
	private val mDefaultBorderColor = resources.getColor(R.color.viewfinder_border)
	private val mDefaultBorderStrokeWidth = resources.getInteger(R.integer.viewfinder_border_width)
	private val mDefaultBorderLineLength = resources.getInteger(R.integer.viewfinder_border_length)

	protected var mLaserPaint : Paint
	protected var mFinderMaskPaint: Paint
	protected var mBorderPaint: Paint
	protected var mBorderLineLength: Int = 0
	protected var mSquareViewFinder: Boolean = false
	private var mIsLaserEnabled: Boolean = true
	private var mBordersAlpha: Float = 0.toFloat()
	private var mViewFinderOffset = 0

	constructor(context: Context) : super(context)

	constructor(context: Context, attributeSet: AttributeSet) : super(context, attributeSet)

	init
	{
		//set up laser paint
		mLaserPaint = Paint()
		mLaserPaint.color = mDefaultLaserColor
		mLaserPaint.style = Paint.Style.FILL

		//finder mask paint
		mFinderMaskPaint = Paint()
		mFinderMaskPaint.color = mDefaultMaskColor

		//border paint
		mBorderPaint = Paint()
		mBorderPaint.color = mDefaultBorderColor
		mBorderPaint.style = Paint.Style.STROKE
		mBorderPaint.strokeWidth = mDefaultBorderStrokeWidth.toFloat()
		mBorderPaint.isAntiAlias = true

		mBorderLineLength = mDefaultBorderLineLength
	}

	override fun setLaserColor(laserColor: Int)
	{
		mLaserPaint.color = laserColor
	}

	override fun setMaskColor(maskColor: Int)
	{
		mFinderMaskPaint.color = maskColor
	}

	override fun setBorderColor(borderColor: Int)
	{
		mBorderPaint.color = borderColor
	}

	override fun setBorderStrokeWidth(borderStrokeWidth: Int)
	{
		mBorderPaint.strokeWidth = borderStrokeWidth.toFloat()
	}

	override fun setBorderLineLength(borderLineLength: Int)
	{
		mBorderLineLength = borderLineLength
	}

	override fun setLaserEnabled(isLaserEnabled: Boolean)
	{
		mIsLaserEnabled = isLaserEnabled
	}

	override fun setBorderCornerRounded(isBorderCornersRounded: Boolean)
	{
		if (isBorderCornersRounded)
		{
			mBorderPaint.strokeJoin = Paint.Join.ROUND
		}
		else
		{
			mBorderPaint.strokeJoin = Paint.Join.BEVEL
		}
	}

	override fun setBorderAlpha(alpha: Float)
	{
		val colorAlpha = (255 * alpha).toInt()
		mBordersAlpha = alpha
		mBorderPaint.alpha = colorAlpha
	}

	override fun setBorderCornerRadius(borderCornersRadius: Int)
	{
		mBorderPaint.pathEffect = CornerPathEffect(borderCornersRadius.toFloat())
	}

	override fun setViewFinderOffset(offset: Int)
	{
		mViewFinderOffset = offset
	}

	// TODO: Need a better way to configure this. Revisit when working on 2.0
	override fun setSquareViewFinder(set: Boolean)
	{
		mSquareViewFinder = set
	}

	override fun setupViewFinder()
	{
		updateFramingRect()
		invalidate()
	}

	override fun getFramingRect(): Rect?
	{
		return mFramingRect
	}

	public override fun onDraw(canvas: Canvas)
	{
		if (framingRect == null)
		{
			return
		}

		drawViewFinderMask(canvas)
		drawViewFinderBorder(canvas)

		if (mIsLaserEnabled)
		{
			drawLaser(canvas)
		}
	}

	fun drawViewFinderMask(canvas: Canvas)
	{
		val width = canvas.width
		val height = canvas.height
		val framingRect = framingRect

		canvas.drawRect(0f, 0f, width.toFloat(), framingRect!!.top.toFloat(), mFinderMaskPaint)
		canvas.drawRect(0f, framingRect.top.toFloat(), framingRect.left.toFloat(), (framingRect.bottom + 1).toFloat(), mFinderMaskPaint)
		canvas.drawRect((framingRect.right + 1).toFloat(), framingRect.top.toFloat(), width.toFloat(), (framingRect.bottom + 1).toFloat(), mFinderMaskPaint)
		canvas.drawRect(0f, (framingRect.bottom + 1).toFloat(), width.toFloat(), height.toFloat(), mFinderMaskPaint)
	}

	fun drawViewFinderBorder(canvas: Canvas)
	{
		val framingRect = framingRect

		// Top-left corner
		val path = Path()
		path.moveTo(framingRect!!.left.toFloat(), (framingRect.top + mBorderLineLength).toFloat())
		path.lineTo(framingRect.left.toFloat(), framingRect.top.toFloat())
		path.lineTo((framingRect.left + mBorderLineLength).toFloat(), framingRect.top.toFloat())
		canvas.drawPath(path, mBorderPaint)

		// Top-right corner
		path.moveTo(framingRect.right.toFloat(), (framingRect.top + mBorderLineLength).toFloat())
		path.lineTo(framingRect.right.toFloat(), framingRect.top.toFloat())
		path.lineTo((framingRect.right - mBorderLineLength).toFloat(), framingRect.top.toFloat())
		canvas.drawPath(path, mBorderPaint)

		// Bottom-right corner
		path.moveTo(framingRect.right.toFloat(), (framingRect.bottom - mBorderLineLength).toFloat())
		path.lineTo(framingRect.right.toFloat(), framingRect.bottom.toFloat())
		path.lineTo((framingRect.right - mBorderLineLength).toFloat(), framingRect.bottom.toFloat())
		canvas.drawPath(path, mBorderPaint)

		// Bottom-left corner
		path.moveTo(framingRect.left.toFloat(), (framingRect.bottom - mBorderLineLength).toFloat())
		path.lineTo(framingRect.left.toFloat(), framingRect.bottom.toFloat())
		path.lineTo((framingRect.left + mBorderLineLength).toFloat(), framingRect.bottom.toFloat())
		canvas.drawPath(path, mBorderPaint)
	}

	fun drawLaser(canvas: Canvas)
	{
		val framingRect = framingRect

		// Draw a red "laser scanner" line through the middle to show decoding is active
		mLaserPaint.alpha = SCANNER_ALPHA[scannerAlpha]
		scannerAlpha = (scannerAlpha + 1) % SCANNER_ALPHA.size
		val middle = framingRect!!.height() / 2 + framingRect.top
		canvas.drawRect((framingRect.left + 2).toFloat(), (middle - 1).toFloat(), (framingRect.right - 1).toFloat(), (middle + 2).toFloat(), mLaserPaint)

		postInvalidateDelayed(ANIMATION_DELAY, framingRect.left - POINT_SIZE, framingRect.top - POINT_SIZE, framingRect.right + POINT_SIZE, framingRect.bottom + POINT_SIZE)
	}

	override fun onSizeChanged(xNew: Int, yNew: Int, xOld: Int, yOld: Int)
	{
		updateFramingRect()
	}

	@Synchronized
	fun updateFramingRect()
	{
		val viewResolution = Point(width, height)
		var width: Int
		var height: Int
		val orientation = DisplayUtils.getScreenOrientation(context)

		if (mSquareViewFinder)
		{
			if (orientation != Configuration.ORIENTATION_PORTRAIT)
			{
				height = (getHeight() * DEFAULT_SQUARE_DIMENSION_RATIO).toInt()
				width = height
			}
			else
			{
				width = (getWidth() * DEFAULT_SQUARE_DIMENSION_RATIO).toInt()
				height = width
			}
		}
		else
		{
			if (orientation != Configuration.ORIENTATION_PORTRAIT)
			{
				height = (getHeight() * LANDSCAPE_HEIGHT_RATIO).toInt()
				width = (LANDSCAPE_WIDTH_HEIGHT_RATIO * height).toInt()
			}
			else
			{
				width = (getWidth() * PORTRAIT_WIDTH_RATIO).toInt()
				height = (PORTRAIT_WIDTH_HEIGHT_RATIO * width).toInt()
			}
		}

		if (width > getWidth())
		{
			width = getWidth() - MIN_DIMENSION_DIFF
		}

		if (height > getHeight())
		{
			height = getHeight() - MIN_DIMENSION_DIFF
		}

		val leftOffset = (viewResolution.x - width) / 2
		val topOffset = (viewResolution.y - height) / 2
		mFramingRect = Rect(leftOffset + mViewFinderOffset, topOffset + mViewFinderOffset, leftOffset + width - mViewFinderOffset, topOffset + height - mViewFinderOffset)
	}

	companion object
	{
		private val TAG = "ViewFinderView"

		private val PORTRAIT_WIDTH_RATIO = 6f / 8
		private val PORTRAIT_WIDTH_HEIGHT_RATIO = 0.75f

		private val LANDSCAPE_HEIGHT_RATIO = 5f / 8
		private val LANDSCAPE_WIDTH_HEIGHT_RATIO = 1.4f
		private val MIN_DIMENSION_DIFF = 50

		private val DEFAULT_SQUARE_DIMENSION_RATIO = 5f / 8

		private val SCANNER_ALPHA = intArrayOf(0, 64, 128, 192, 255, 192, 128, 64)
		private val POINT_SIZE = 10
		private val ANIMATION_DELAY = 80L
	}
}
